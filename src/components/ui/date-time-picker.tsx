"use client";

import * as React from "react";
import { CalendarDays, Check, ChevronLeft, ChevronRight, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { cn } from "@/lib/utils";

const monthFormatter = new Intl.DateTimeFormat("en-NG", {
  month: "long",
  year: "numeric",
});

const dateFormatter = new Intl.DateTimeFormat("en-NG", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("en-NG", {
  hour: "numeric",
  minute: "2-digit",
});

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const timeSlots = Array.from({ length: 27 }, (_, index) => {
  const totalMinutes = 8 * 60 + index * 30;
  const hour = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
});

function parseDate(value: string) {
  if (!value) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day, 12);
}

function formatDateValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function displayDate(value: string, placeholder: string) {
  const date = parseDate(value);

  return date ? dateFormatter.format(date) : placeholder;
}

function displayTime(value: string, placeholder: string) {
  if (!value) {
    return placeholder;
  }

  const [hour, minute] = value.split(":").map(Number);

  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return placeholder;
  }

  const date = new Date(2026, 0, 1, hour, minute);

  return timeFormatter.format(date);
}

function getCalendarDays(monthDate: Date) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1, 12);
  const lastDay = new Date(year, month + 1, 0, 12);
  const leadingBlankDays = firstDay.getDay();

  return [
    ...Array.from({ length: leadingBlankDays }, () => null),
    ...Array.from(
      { length: lastDay.getDate() },
      (_, index) => new Date(year, month, index + 1, 12),
    ),
  ];
}

type DatePickerFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: string;
};

export function DatePickerField({
  label,
  value,
  onChange,
  placeholder = "Pick a date",
  className,
  error,
}: DatePickerFieldProps) {
  const selectedDate = parseDate(value);
  const [open, setOpen] = React.useState(false);
  const [visibleMonth, setVisibleMonth] = React.useState(
    selectedDate ?? new Date(new Date().getFullYear(), new Date().getMonth(), 1, 12),
  );

  const days = getCalendarDays(visibleMonth);

  function changeMonth(offset: number) {
    setVisibleMonth(
      (current) => new Date(current.getFullYear(), current.getMonth() + offset, 1, 12),
    );
  }

  function selectDate(date: Date) {
    onChange(formatDateValue(date));
    setOpen(false);
  }

  return (
    <Field data-invalid={Boolean(error)} className={className}>
      <FieldLabel className="text-sm font-bold text-white">{label}</FieldLabel>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          render={
            <Button
              type="button"
              variant="outline"
              className="min-h-12 w-full justify-start gap-3 rounded-md border-white/10 bg-[#0B0B0B] px-4 py-3 text-left text-sm font-medium text-white hover:bg-[#0B0B0B] hover:text-[#FDCA0D] aria-expanded:border-[#FDCA0D]"
            />
          }
        >
          <CalendarDays className="h-5 w-5 text-[#FDCA0D]" aria-hidden="true" />
          <span>{displayDate(value, placeholder)}</span>
        </DialogTrigger>
        <DialogContent className="max-w-[calc(100%-2rem)] gap-5 rounded-lg border border-white/10 bg-[#171717] p-5 text-white sm:max-w-sm">
          <div className="flex flex-col gap-2">
            <DialogTitle className="font-sans text-base font-bold text-white">
              {label}
            </DialogTitle>
            <DialogDescription className="text-sm leading-6 text-white/62">
              Choose the preferred date for delivery or event setup.
            </DialogDescription>
          </div>

          <div className="flex items-center justify-between gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="border-white/10 bg-[#0B0B0B] text-white hover:bg-[#FDCA0D] hover:text-[#0B0B0B]"
              onClick={() => changeMonth(-1)}
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </Button>
            <p className="text-sm font-bold text-[#FDCA0D]">
              {monthFormatter.format(visibleMonth)}
            </p>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="border-white/10 bg-[#0B0B0B] text-white hover:bg-[#FDCA0D] hover:text-[#0B0B0B]"
              onClick={() => changeMonth(1)}
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {weekdays.map((weekday) => (
              <span key={weekday} className="px-1 py-2 text-xs font-bold text-white/52">
                {weekday}
              </span>
            ))}
            {days.map((date, index) =>
              date ? (
                <button
                  key={formatDateValue(date)}
                  type="button"
                  onClick={() => selectDate(date)}
                  className={cn(
                    "flex aspect-square items-center justify-center rounded-md text-sm font-semibold text-white transition hover:bg-[#FDCA0D] hover:text-[#0B0B0B]",
                    value === formatDateValue(date) &&
                      "bg-[#FDCA0D] text-[#0B0B0B] hover:bg-[#FDCA0D]",
                  )}
                  aria-pressed={value === formatDateValue(date)}
                >
                  {date.getDate()}
                </button>
              ) : (
                <span key={`empty-${index}`} aria-hidden="true" />
              ),
            )}
          </div>

          <DialogFooter className="rounded-lg border-white/10 bg-[#0B0B0B] p-3">
            <Button
              type="button"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
              onClick={() => {
                onChange("");
                setOpen(false);
              }}
            >
              Clear date
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <FieldError>{error}</FieldError>
    </Field>
  );
}

type TimePickerFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: string;
};

export function TimePickerField({
  label,
  value,
  onChange,
  placeholder = "Pick a time",
  className,
  error,
}: TimePickerFieldProps) {
  const [open, setOpen] = React.useState(false);

  function selectTime(time: string) {
    onChange(time);
    setOpen(false);
  }

  return (
    <Field data-invalid={Boolean(error)} className={cn(className)}>
      <FieldLabel className="text-sm font-bold text-white">{label}</FieldLabel>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          render={
            <Button
              type="button"
              variant="outline"
              className="min-h-12 w-full justify-start gap-3 rounded-md border-white/10 bg-[#0B0B0B] px-4 py-3 text-left text-sm font-medium text-white hover:bg-[#0B0B0B] hover:text-[#FDCA0D] aria-expanded:border-[#FDCA0D]"
            />
          }
        >
          <Clock className="h-5 w-5 text-[#FDCA0D]" aria-hidden="true" />
          <span>{displayTime(value, placeholder)}</span>
        </DialogTrigger>
        <DialogContent className="max-w-[calc(100%-2rem)] gap-5 rounded-lg border border-white/10 bg-[#171717] p-5 text-white sm:max-w-md">
          <div className="flex flex-col gap-2">
            <DialogTitle className="font-sans text-base font-bold text-white">
              {label}
            </DialogTitle>
            <DialogDescription className="text-sm leading-6 text-white/62">
              Choose the preferred delivery or setup time.
            </DialogDescription>
          </div>

          <div className="grid max-h-72 grid-cols-2 gap-2 overflow-auto sm:grid-cols-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => selectTime(time)}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/10 bg-[#0B0B0B] px-3 py-2 text-sm font-semibold text-white transition hover:border-[#FDCA0D] hover:text-[#FDCA0D]",
                  value === time &&
                    "border-[#FDCA0D] bg-[#FDCA0D] text-[#0B0B0B] hover:text-[#0B0B0B]",
                )}
                aria-pressed={value === time}
              >
                {value === time ? <Check className="h-4 w-4" aria-hidden="true" /> : null}
                {displayTime(time, time)}
              </button>
            ))}
          </div>

          <DialogFooter className="rounded-lg border-white/10 bg-[#0B0B0B] p-3">
            <Button
              type="button"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
              onClick={() => {
                onChange("");
                setOpen(false);
              }}
            >
              Clear time
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <FieldError>{error}</FieldError>
    </Field>
  );
}

'use client'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  DatePickerField,
  TimePickerField,
} from '@/components/ui/date-time-picker'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import {
  ClipboardList,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Users,
} from 'lucide-react'
import { FormEvent, useMemo, useState } from 'react'
import {
  eventBudgetRanges,
  eventPackageOptions,
  eventTypes,
  orderMealOptions,
  phoneNumber,
} from './data'
import {
  buildWhatsAppMessage,
  FlowType,
  FormErrors,
  FormState,
  initialFormState,
  validateOrderFlow,
} from './order-flow-schema'

const cleanPhoneNumber = phoneNumber.replace(/\D/g, '')
const inputClass =
  'min-h-12 rounded-md border-white/10 bg-[#0B0B0B] px-4 py-3 text-sm font-medium text-white placeholder:text-white/35 focus:border-[#FDCA0D] focus:ring-2 focus:ring-[#FDCA0D]/20'

export function WhatsAppOrderSection() {
  const [flowType, setFlowType] = useState<FlowType>('quick-order')
  const [form, setForm] = useState<FormState>(initialFormState)
  const [errors, setErrors] = useState<FormErrors>({})

  const message = useMemo(
    () => buildWhatsAppMessage(flowType, form),
    [flowType, form],
  )
  const whatsappHref = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(
    message,
  )}`

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function updateFlowType(value: string) {
    setFlowType(value as FlowType)
    setErrors({})
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validation = validateOrderFlow(flowType, form)

    if (!validation.success) {
      setErrors(validation.errors)
      return
    }

    setErrors({})
    window.open(whatsappHref, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id='order-flow'
      className='bg-[#FFF8DF] px-5 py-16 sm:px-6 lg:px-8'
    >
      <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]'>
        <div className='flex flex-col justify-between gap-8 rounded-lg bg-[#0B0B0B] p-6 text-white sm:p-8'>
          <div className='flex flex-col gap-5'>
            <div className='flex h-14 w-14 items-center justify-center rounded-full bg-[#FDCA0D] text-[#0B0B0B]'>
              <ClipboardList className='h-7 w-7' aria-hidden='true' />
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-sm font-semibold text-[#FDCA0D]'>
                WhatsApp Order Flow
              </p>
              <h2 className='text-4xl font-extrabold leading-tight sm:text-5xl'>
                Send the right details the first time.
              </h2>
              <p className='text-base leading-8 text-white/72'>
                Choose a quick meal order or an event booking, fill in the
                important details, and we will receive a clear WhatsApp message
                ready for confirmation.
              </p>
            </div>
          </div>

          <div className='grid gap-3'>
            <Alert className='border-white/10 bg-white/[0.04] p-4 text-white'>
              <Phone className='h-5 w-5 text-[#FDCA0D]' aria-hidden='true' />
              <AlertDescription className='text-sm leading-6 text-white/72'>
                Best for custom meals, bulk bowls, office lunch, parties, and
                event catering requests.
              </AlertDescription>
            </Alert>
            <Alert className='border-[#25D366]/30 bg-[#25D366]/10 p-4 text-white'>
              <MessageCircle
                className='h-5 w-5 text-[#25D366]'
                aria-hidden='true'
              />
              <AlertDescription className='text-sm leading-6 text-white/78'>
                No payment is collected here. Final price, availability, and
                delivery are confirmed on WhatsApp.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-6 rounded-lg bg-[#171717] p-5 text-white border sm:p-6 lg:p-8'
        >
          <Tabs
            value={flowType}
            onValueChange={updateFlowType}
            className='gap-6'
          >
            <TabsList className='grid lg:h-11 bg-muted/10 w-full grid-cols-2 gap-3'>
              <TabsTrigger
                value='quick-order'
                className=' text-sm font-semibold text-white data-active:bg-primary hover:text-white data-active:text-[#0B0B0B]'
              >
                Quick Order
              </TabsTrigger>
              <TabsTrigger
                value='event-booking'
                className=' text-sm font-semibold text-white data-active:bg-primary hover:text-white data-active:text-[#0B0B0B]'
              >
                Event Booking
              </TabsTrigger>
            </TabsList>

            <div className='scrollbar-hide flex max-h-[34rem] flex-col gap-6 overflow-y-auto pr-1 sm:max-h-[36rem] lg:max-h-[40rem]'>
              <div className='grid gap-4 sm:grid-cols-2'>
                <Field data-invalid={Boolean(errors.customerName)}>
                  <FieldLabel className='text-sm font-semibold text-white'>
                    Your name
                  </FieldLabel>
                  <Input
                    value={form.customerName}
                    aria-invalid={Boolean(errors.customerName)}
                    onChange={(event) =>
                      updateField('customerName', event.target.value)
                    }
                    placeholder='e.g. Deejah Smith'
                    className={inputClass}
                  />
                  <FieldError>{errors.customerName}</FieldError>
                </Field>

                <Field data-invalid={Boolean(errors.customerPhone)}>
                  <FieldLabel className='text-sm font-semibold text-white'>
                    Phone number
                  </FieldLabel>
                  <span className='relative'>
                    <Phone
                      className='pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#FDCA0D]'
                      aria-hidden='true'
                    />
                    <Input
                      value={form.customerPhone}
                      aria-invalid={Boolean(errors.customerPhone)}
                      onChange={(event) =>
                        updateField('customerPhone', event.target.value)
                      }
                      placeholder='e.g. 0816 061 9155'
                      inputMode='tel'
                      className={`${inputClass} pl-12`}
                    />
                  </span>
                  <FieldError>{errors.customerPhone}</FieldError>
                </Field>
              </div>

              <TabsContent
                value='quick-order'
                className='grid gap-4 sm:grid-cols-2'
              >
                <Field data-invalid={Boolean(errors.meal)}>
                  <FieldLabel className='text-sm font-semibold text-white'>
                    Meal or package
                  </FieldLabel>
                  <Select
                    value={form.meal}
                    onValueChange={(value) => {
                      if (typeof value === 'string') {
                        updateField('meal', value)
                      }
                    }}
                  >
                    <SelectTrigger
                      aria-invalid={Boolean(errors.meal)}
                      className={`${inputClass} w-full`}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='border border-white/10 bg-[#171717] text-white'>
                      {orderMealOptions.map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className='text-white focus:bg-[#FDCA0D] focus:text-[#0B0B0B]'
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldError>{errors.meal}</FieldError>
                </Field>

                <Field data-invalid={Boolean(errors.quantity)}>
                  <FieldLabel className='text-sm font-semibold text-white'>
                    Quantity
                  </FieldLabel>
                  <Input
                    value={form.quantity}
                    aria-invalid={Boolean(errors.quantity)}
                    onChange={(event) =>
                      updateField('quantity', event.target.value)
                    }
                    placeholder='e.g. 2 plates or 1 bowl'
                    className={inputClass}
                  />
                  <FieldError>{errors.quantity}</FieldError>
                </Field>

                <DatePickerField
                  label='Delivery date'
                  value={form.orderDate}
                  error={errors.orderDate}
                  onChange={(value) => updateField('orderDate', value)}
                />
                <TimePickerField
                  label='Delivery time'
                  value={form.orderTime}
                  error={errors.orderTime}
                  onChange={(value) => updateField('orderTime', value)}
                />

                <Field
                  data-invalid={Boolean(errors.deliveryAddress)}
                  className='sm:col-span-2'
                >
                  <FieldLabel className='text-sm font-semibold text-white'>
                    Delivery address
                  </FieldLabel>
                  <span className='relative'>
                    <MapPin
                      className='pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#FDCA0D]'
                      aria-hidden='true'
                    />
                    <Input
                      value={form.deliveryAddress}
                      aria-invalid={Boolean(errors.deliveryAddress)}
                      onChange={(event) =>
                        updateField('deliveryAddress', event.target.value)
                      }
                      placeholder='Street, estate, area, Lagos'
                      className={`${inputClass} pl-12`}
                    />
                  </span>
                  <FieldError>{errors.deliveryAddress}</FieldError>
                </Field>
              </TabsContent>

              <TabsContent
                value='event-booking'
                className='grid gap-4 sm:grid-cols-2'
              >
                <Field data-invalid={Boolean(errors.eventType)}>
                  <FieldLabel className='text-sm font-semibold text-white'>
                    Event type
                  </FieldLabel>
                  <Select
                    value={form.eventType}
                    onValueChange={(value) => {
                      if (typeof value === 'string') {
                        updateField('eventType', value)
                      }
                    }}
                  >
                    <SelectTrigger
                      aria-invalid={Boolean(errors.eventType)}
                      className={`${inputClass} w-full`}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='border border-white/10 bg-[#171717] text-white'>
                      {eventTypes.map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className='text-white focus:bg-[#FDCA0D] focus:text-[#0B0B0B]'
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldError>{errors.eventType}</FieldError>
                </Field>

                <Field data-invalid={Boolean(errors.guestCount)}>
                  <FieldLabel className='text-sm font-semibold text-white'>
                    Number of guests
                  </FieldLabel>
                  <span className='relative'>
                    <Users
                      className='pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#FDCA0D]'
                      aria-hidden='true'
                    />
                    <Input
                      value={form.guestCount}
                      aria-invalid={Boolean(errors.guestCount)}
                      onChange={(event) =>
                        updateField('guestCount', event.target.value)
                      }
                      placeholder='e.g. 40 guests'
                      className={`${inputClass} pl-12`}
                    />
                  </span>
                  <FieldError>{errors.guestCount}</FieldError>
                </Field>

                <Field data-invalid={Boolean(errors.packageInterest)}>
                  <FieldLabel className='text-sm font-semibold text-white'>
                    Package interest
                  </FieldLabel>
                  <Select
                    value={form.packageInterest}
                    onValueChange={(value) => {
                      if (typeof value === 'string') {
                        updateField('packageInterest', value)
                      }
                    }}
                  >
                    <SelectTrigger
                      aria-invalid={Boolean(errors.packageInterest)}
                      className={`${inputClass} w-full`}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='border border-white/10 bg-[#171717] text-white'>
                      {eventPackageOptions.map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className='text-white focus:bg-[#FDCA0D] focus:text-[#0B0B0B]'
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldError>{errors.packageInterest}</FieldError>
                </Field>

                <Field data-invalid={Boolean(errors.budgetRange)}>
                  <FieldLabel className='text-sm font-semibold text-white'>
                    Budget range
                  </FieldLabel>
                  <Select
                    value={form.budgetRange}
                    onValueChange={(value) => {
                      if (typeof value === 'string') {
                        updateField('budgetRange', value)
                      }
                    }}
                  >
                    <SelectTrigger
                      aria-invalid={Boolean(errors.budgetRange)}
                      className={`${inputClass} w-full`}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='border border-white/10 bg-[#171717] text-white'>
                      {eventBudgetRanges.map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className='text-white focus:bg-[#FDCA0D] focus:text-[#0B0B0B]'
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldError>{errors.budgetRange}</FieldError>
                </Field>

                <DatePickerField
                  label='Event date'
                  value={form.eventDate}
                  error={errors.eventDate}
                  onChange={(value) => updateField('eventDate', value)}
                />
                <TimePickerField
                  label='Delivery/setup time'
                  value={form.eventTime}
                  error={errors.eventTime}
                  onChange={(value) => updateField('eventTime', value)}
                />

                <Field
                  data-invalid={Boolean(errors.eventVenue)}
                  className='sm:col-span-2'
                >
                  <FieldLabel className='text-sm font-semibold text-white'>
                    Venue or location
                  </FieldLabel>
                  <span className='relative'>
                    <MapPin
                      className='pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#FDCA0D]'
                      aria-hidden='true'
                    />
                    <Input
                      value={form.eventVenue}
                      aria-invalid={Boolean(errors.eventVenue)}
                      onChange={(event) =>
                        updateField('eventVenue', event.target.value)
                      }
                      placeholder='Venue, estate, area, Lagos'
                      className={`${inputClass} pl-12`}
                    />
                  </span>
                  <FieldError>{errors.eventVenue}</FieldError>
                </Field>
              </TabsContent>
            </div>
          </Tabs>

          <Field data-invalid={Boolean(errors.notes)}>
            <FieldLabel className='text-sm font-semibold text-white'>
              Extra notes
            </FieldLabel>
            <Textarea
              value={form.notes}
              aria-invalid={Boolean(errors.notes)}
              onChange={(event) => updateField('notes', event.target.value)}
              placeholder='Protein preference, spice level, delivery instructions, or event details.'
              className='min-h-28 w-full resize-y rounded-md border-white/10 bg-[#0B0B0B] px-4 py-3 text-sm font-medium leading-6 text-white placeholder:text-white/35 focus:border-[#FDCA0D] focus:ring-2 focus:ring-[#FDCA0D]/20'
            />
            <FieldError>{errors.notes}</FieldError>
          </Field>

          <Alert className='border-white/10 bg-[#0B0B0B] p-4 text-white'>
            <AlertDescription>
              <span className='block text-sm font-semibold text-[#FDCA0D]'>
                WhatsApp preview
              </span>
              <pre className='max-h-48 overflow-auto whitespace-pre-wrap pt-3 text-sm leading-6 text-white/72'>
                {message}
              </pre>
            </AlertDescription>
          </Alert>

          <Button
            type='submit'
            className='h-11 bg-[#25D366] px-6 text-[#0B0B0B] transition hover:bg-primary'
          >
            <Send className='h-5 w-5' aria-hidden='true' />
            Send Details on WhatsApp
          </Button>
        </form>
      </div>
    </section>
  )
}

import { z } from 'zod'
import {
  eventBudgetRanges,
  eventPackageOptions,
  eventTypes,
  orderMealOptions,
} from './data'

export type FlowType = 'quick-order' | 'event-booking'

export const orderFormSchema = z.object({
  customerName: z.string().trim().min(2, 'Enter your name.'),
  customerPhone: z.string().trim().min(7, 'Enter a reachable phone number.'),
  meal: z.string().trim().min(1, 'Choose a meal or package.'),
  quantity: z.string().trim().min(1, 'Enter the quantity.'),
  orderDate: z.string().trim(),
  orderTime: z.string().trim(),
  deliveryAddress: z.string().trim().min(5, 'Enter the delivery address.'),
  eventType: z.string().trim().min(1, 'Choose the event type.'),
  guestCount: z.string().trim().min(1, 'Enter the guest count.'),
  packageInterest: z.string().trim().min(1, 'Choose a package.'),
  eventDate: z.string().trim(),
  eventTime: z.string().trim(),
  eventVenue: z.string().trim().min(5, 'Enter the venue or location.'),
  budgetRange: z.string().trim().min(1, 'Choose a budget range.'),
  notes: z.string().trim(),
})

export type FormState = z.infer<typeof orderFormSchema>
export type FormErrors = Partial<Record<keyof FormState, string>>

export const initialFormState: FormState = {
  customerName: '',
  customerPhone: '',
  meal: orderMealOptions[0],
  quantity: '',
  orderDate: '',
  orderTime: '',
  deliveryAddress: '',
  eventType: eventTypes[0],
  guestCount: '',
  packageInterest: eventPackageOptions[0],
  eventDate: '',
  eventTime: '',
  eventVenue: '',
  budgetRange: eventBudgetRanges[0],
  notes: '',
}

const quickOrderFields: Array<keyof FormState> = [
  'customerName',
  'customerPhone',
  'meal',
  'quantity',
  'orderDate',
  'orderTime',
  'deliveryAddress',
  'notes',
]

const eventBookingFields: Array<keyof FormState> = [
  'customerName',
  'customerPhone',
  'eventType',
  'guestCount',
  'packageInterest',
  'eventDate',
  'eventTime',
  'eventVenue',
  'budgetRange',
  'notes',
]

const quickOrderSchema = orderFormSchema.pick({
  customerName: true,
  customerPhone: true,
  meal: true,
  quantity: true,
  orderDate: true,
  orderTime: true,
  deliveryAddress: true,
  notes: true,
})

const eventBookingSchema = orderFormSchema.pick({
  customerName: true,
  customerPhone: true,
  eventType: true,
  guestCount: true,
  packageInterest: true,
  eventDate: true,
  eventTime: true,
  eventVenue: true,
  budgetRange: true,
  notes: true,
})

function withValue(label: string, value: string | undefined) {
  return value?.trim() ? `${label}: ${value.trim()}` : null
}

export function validateOrderFlow(flowType: FlowType, form: FormState) {
  const schema = flowType === 'quick-order' ? quickOrderSchema : eventBookingSchema
  const result = schema.safeParse(form)

  if (result.success) {
    return { success: true as const, errors: {} }
  }

  const activeFields =
    flowType === 'quick-order' ? quickOrderFields : eventBookingFields
  const errors: FormErrors = {}

  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof FormState | undefined

    if (field && activeFields.includes(field) && !errors[field]) {
      errors[field] = issue.message
    }
  }

  return { success: false as const, errors }
}

export function buildWhatsAppMessage(flowType: FlowType, form: FormState) {
  const lines =
    flowType === 'quick-order'
      ? [
          'Hello Abeke Omogeolofada, I would like to place an order.',
          withValue('Name', form.customerName),
          withValue('Phone', form.customerPhone),
          withValue('Meal or package', form.meal),
          withValue('Quantity', form.quantity),
          withValue('Delivery date', form.orderDate),
          withValue('Delivery time', form.orderTime),
          withValue('Delivery address', form.deliveryAddress),
          withValue('Notes', form.notes),
        ]
      : [
          'Hello Abeke Omogeolofada, I would like to book food for an event.',
          withValue('Name', form.customerName),
          withValue('Phone', form.customerPhone),
          withValue('Event type', form.eventType),
          withValue('Guest count', form.guestCount),
          withValue('Package interest', form.packageInterest),
          withValue('Event date', form.eventDate),
          withValue('Delivery/setup time', form.eventTime),
          withValue('Venue/location', form.eventVenue),
          withValue('Budget range', form.budgetRange),
          withValue('Notes', form.notes),
        ]

  return lines.filter(Boolean).join('\n')
}

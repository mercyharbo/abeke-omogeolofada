import Image from 'next/image'

type MealCardProps = {
  meal: {
    name: string
    description: string
    price: string
    image: string
    badge?: string
  }
}

export function MealCard({ meal }: MealCardProps) {
  return (
    <article className='group relative overflow-hidden rounded-lg bg-[#0B0B0B] text-white shadow-[0_18px_36px_rgba(11,11,11,0.22)] ring-1 ring-black/10'>
      {meal.badge ? (
        <span className='absolute left-0 top-0 z-10 rounded-br-md bg-[#FDCA0D] px-3 py-1.5 font-heading text-sm text-[#0B0B0B]'>
          {meal.badge}
        </span>
      ) : null}
      <div className='relative aspect-[1.25] overflow-hidden bg-[#171717]'>
        <Image
          src={meal.image}
          alt={`${meal.name} Ofada meal`}
          fill
          sizes='(min-width: 1280px) 190px, (min-width: 768px) 30vw, 90vw'
          className='object-cover transition duration-500 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent' />
      </div>
      <div className='flex min-h-44 flex-col justify-between gap-5 p-5'>
        <div className='space-y-2'>
          <h3 className='font-heading text-xl'>{meal.name}</h3>
          <p className='text-sm'>{meal.description}</p>
        </div>
        <p className='font-heading text-2xl text-[#FDCA0D]'>{meal.price}</p>
      </div>
    </article>
  )
}

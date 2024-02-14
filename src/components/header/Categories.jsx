import { useCategory } from '../../context'

export default function Categories() {
  const { category, setCategory } = useCategory()

  const categoryTypes = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
  ]
  return (
    <>
      <div className="container mx-auto mt-6">
        <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
          {categoryTypes?.map((cat, i) => (
            <li key={i} className='capitalize cursor-pointer' onClick={() => setCategory(cat)}>
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

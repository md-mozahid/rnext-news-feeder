import { useCategory } from '../../context'
import { CategoryTypes } from '../../data/CategoryTypes'

export default function Categories() {
  const { category, setCategory } = useCategory()

  return (
    <>
      <div className="container mx-auto mt-6">
        <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
          {CategoryTypes?.map((cat) => (
            <li
              key={cat.value}
              className={` hover:text-emerald-500 cursor-pointer
                ${
                  category === cat?.value
                    ? 'text-emerald-500 font-bold '
                    : 'text-slate-700'
                }
              `}
              onClick={() => setCategory(cat.value)}>
              {cat.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

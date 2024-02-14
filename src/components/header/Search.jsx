import SearchIcon from '../../assets/icons/search.svg'
import { useSearch } from '../../context'

export default function Search() {
  const { setSearch } = useSearch()
  return (
    <>
      <div className="flex items-center space-x-3 lg:space-x-8">
        <div className="relative">
          <input
            type="text"
            className="border border-slate-700 outline-none rounded-full px-4 py-1 pl-9"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <img src={SearchIcon} />
          </div>
        </div>
      </div>
    </>
  )
}

import { useState } from 'react'
import { SearchContext } from '../context'

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState(null)
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider

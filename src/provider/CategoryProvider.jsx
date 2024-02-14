import { useState } from 'react'
import { CategoryContext } from '../context'

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState(null)

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider

import { createContext, useContext } from 'react'

export const NewsContext = createContext(null)
export const CategoryContext = createContext(null)
export const SearchContext = createContext(null)

// custom hooks
export const useNews = () => {
  return useContext(NewsContext)
}
export const useCategory = () => {
  return useContext(CategoryContext)
}
export const useSearch = () => {
  return useContext(SearchContext)
}

import { createContext, useEffect, useState } from "react"
import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils"

export const CategoriesContext = createContext({
  categoriesMap: {},
})

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  useEffect(() => {
    const getCategoriesMap = async () => {
      const collectionMap = await getCollectionAndDocuments()
      console.log(collectionMap)
      setCategoriesMap(collectionMap)
    }
    getCategoriesMap()
  }, [])
  const value = { categoriesMap }
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesProvider

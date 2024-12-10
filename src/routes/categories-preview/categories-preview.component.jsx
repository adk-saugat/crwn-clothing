import { CategoriesContext } from "../../context/categoriesContext"
import { useContext } from "react"
import CategoryPeview from "../../components/category-preview/category-preview.component"

const CategoriesPeview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPeview title={title} products={products} />
      })}
    </div>
  )
}

export default CategoriesPeview

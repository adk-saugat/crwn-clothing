import { useContext, useEffect, useState } from "react"
import "./category.styles.scss"
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../context/categoriesContext"
import ProductCard from "../../components/product-card/product-card.component"

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [product, setProduct] = useState([])

  useEffect(() => {
    setProduct(categoriesMap[category])
  }, [category, categoriesMap])
  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {product &&
          product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  )
}

export default Category

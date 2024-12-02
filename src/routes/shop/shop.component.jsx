import { CategoriesContext } from "../../context/categoriesContext"
import { Fragment, useContext } from "react"
import ProductCard from "../../components/product-card/product-card.component"
import "./shop.styles.scss"

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        )
      })}
    </>
  )
}

export default Shop

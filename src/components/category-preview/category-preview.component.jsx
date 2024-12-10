import ProductCard from "../product-card/product-card.component"
import "./category-preview.styles.scss"
import { Link } from "react-router-dom"

const CategoryPeview = ({ title, products }) => {
  return (
    <div className="category-preview-container ">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </div>
  )
}
export default CategoryPeview

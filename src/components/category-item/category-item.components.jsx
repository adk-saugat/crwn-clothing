import { useNavigate } from "react-router-dom"
import "./category-item.styles.scss"

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category
  const navigate = useNavigate()
  return (
    <div className="category-item-container" onClick={() => navigate(route)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem

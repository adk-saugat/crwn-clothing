import "./category.styles.scss"
import CategoryItem from "../category-item/category-item.components"

const Category = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}
export default Category

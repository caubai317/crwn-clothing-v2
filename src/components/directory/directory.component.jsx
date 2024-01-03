import "./directory.styles.scss";
import CategoryItem from "../../components/category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => {
        return <CategoryItem key={id} title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
};

export default Directory;

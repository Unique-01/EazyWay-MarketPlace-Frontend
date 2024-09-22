import "./CategoryCard.css";
import picture from "assets/images/eazyWay-logo.png";
const CategoryCard = ({ category }) => (
    // <div className="py-0 my-0">
    <div className="card category-card d-flex align-items-center">
        {category.image ? (
            <img
                src={category.image.url}
                // className="card-img-top"
                alt={category.title}
            />
        ) : (
            <img
                src={picture}
                // className="card-img-top"
                alt={category.title}
            />
        )}
        <div className="card-body text-center">
            <p className="card-title category-name">{category.title}</p>
        </div>
    </div>
    // </div>
);

export default CategoryCard;

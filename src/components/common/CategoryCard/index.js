import "./CategoryCard.css"
const CategoryCard = ({ category }) => (
    // <div className="py-0 my-0">
        <div className="card category-card d-flex align-items-center rounded-0">
            <img
                src={require(`/src/assets/images/category/${category.image}`)}
                // className="card-img-top"
                alt={category.name}
            />
            <div className="card-body text-center">
                <p className="card-title category-name">{category.name}</p>
            </div>
        </div>
    // </div>
);

export default CategoryCard;

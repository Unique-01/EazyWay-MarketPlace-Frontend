import "./StarRating.css";

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    className={`star ${
                        value <= rating ? "checked" : "unchecked"
                    }`}>
                    &#9733;
                </span>
            ))}
        </div>
    );
};

export default StarRating;

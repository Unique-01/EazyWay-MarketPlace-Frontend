import StarRating from "../StarRating";
import "./Reviewcard.css"

const ReviewCard = ({ review }) => {
    return (
        <div className="review-card">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-inline-flex align-items-center">
                    <img
                        src={require(`/src/assets/images/products/${review.image}`)}
                        alt={review.name}
                        className="rounded-circle"
                        width={"28px"}
                        height={"28px"}
                    />
                    <div>
                        <span className=" review-name text-black">{review.name}</span>
                        <span className="review-rating">
                            <StarRating rating={review.rating} />
                        </span>
                    </div>
                </div>
                <div className="fw-normal poppins">2 mins ago{review.date}</div>
            </div>
            <p className="pt-2">
            {review.content}
            </p>
        </div>
    );
};

export default ReviewCard;

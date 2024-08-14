const Button = ({ text, handleClick }) => {
    return (
        <div>
            <button
                onClick={handleClick}
                className="btn btn-primary rounded-pill text-white px-4 py-2 fw-medium">
                {text}
            </button>
        </div>
    );
};

export default Button;

const Button = ({ text, icon, handleClick }) => {
    return (
        <div>
            <button
                onClick={handleClick}
                className="btn btn-primary rounded-pill text-white px-4 py-2 fw-medium">
                {text}
                {icon && <span className="ms-2">{icon}</span>}
            </button>
        </div>
    );
};

export default Button;

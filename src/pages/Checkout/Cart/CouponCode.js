const CouponCode = () => (
    <div>
        <form className="card">
            <div className="card-body">
                <h5 className="card-title pb-3 text-black">Coupon Code</h5>
                <div className="d-flex  flex-column gap-3">
                    <input
                        type="text"
                        className="form-control rounded-pill coupon-input"
                        placeholder="Enter Code"
                    />
                    <button className="btn btn-outline-primary rounded-pill coupon-btn">
                        Apply Code
                    </button>
                </div>
            </div>
        </form>
    </div>
);

export default CouponCode;

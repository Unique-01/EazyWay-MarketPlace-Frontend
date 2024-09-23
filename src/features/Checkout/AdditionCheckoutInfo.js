const AdditionalCheckoutInfo = () => {
    return (
        <div>
            <div className="d-inline-flex gap-1 align-items-center mt-3">
                <input
                    type="checkbox"
                    name="differentAddressCheck"
                    className="form-check-input"
                />
                <label
                    htmlFor="differentAddressCheck"
                    className="form-check-label  billing-label">
                    Ship to a different address
                </label>
            </div>
            <hr className="border-secondary" />
            <div className="mt-4">
                <h4 className="billing-heading">Additional Info</h4>
                <form>
                    <label className="form-label billing-label fw-normal">
                        Order Notes{" "}
                        <span className="text-muted">(Optional)</span>
                    </label>
                    <textarea
                        className="form-control additional-input"
                        placeholder="Notes about your order, e.g. special notes for delivery"
                        rows={4}></textarea>
                </form>
            </div>
        </div>
    );
};

export default AdditionalCheckoutInfo;

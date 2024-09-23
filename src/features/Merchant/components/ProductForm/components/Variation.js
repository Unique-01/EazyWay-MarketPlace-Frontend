import React from 'react';
import VariationForm from "pages/MerchantDashboard/components/VariationForm";

const Variation = ({ handleVariationsChange }) => (
    <div className="bg-white shadow-sm p-4 rounded mb-4">
        <h6 className="mb-3">Variation</h6>
        <VariationForm onChange={handleVariationsChange} />
    </div>
);

export default Variation;

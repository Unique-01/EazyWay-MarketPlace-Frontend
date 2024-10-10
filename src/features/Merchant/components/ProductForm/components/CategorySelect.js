import React from "react";
import { useAuth } from "shared/context/AuthContext";

const CategorySelect = ({
    categories,
    errors,
    selectedCategory,
    handleChange,
    loading,
}) => {
    const { user } = useAuth();
    return (
        <div className="mb-3">
            <label className="form-label">Product Category</label>
            <select
                className={`form-select w-100 ${
                    errors?.category && "border-danger"
                }`}
                name="category"
                value={selectedCategory}
                onChange={handleChange}
                disabled={loading}>
                <option value="">Select Category . . .</option>
                {categories
                    .filter((category) =>
                        user.businessCategory.includes(category._id)
                    )
                    .map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.title}
                        </option>
                    ))}
            </select>
            {errors?.category && (
                <p className="text-danger small">{errors.category}</p>
            )}
        </div>
    );
};

export default CategorySelect;

// import React, { useContext, useEffect, useState } from "react";
// import "./FilterAccordion.css";
// import { FaStar } from "react-icons/fa";
// import ProductCategoryContext from "shared/context/ProductCategoryContext";

// const FilterAccordion = () => {
//     const [categoryList, setCategoryList] = useState([]);
//     const { categories, loading: categoryLoading } = useContext(
//         ProductCategoryContext
//     );

//     useEffect(() => {
//         if (!categoryLoading) {
//             setCategoryList(categories);

//         }
//     }, [categories, categoryLoading]);

//     // const [ratings, setRatings] = useState([
//     //     { value: 5, label: "5.0" },
//     //     { value: 4, label: "4.0 & up" },
//     //     { value: 3, label: "3.0 & up" },
//     //     { value: 2, label: "2.0 & up" },
//     //     { value: 1, label: "1.0 & up" },
//     // ]);

//     const [keywords, setKeywords] = useState([
//         "Healthy",
//         "Low fat",
//         "Vegetarian",
//         "Kid foods",
//         "Vitamins",
//         "Bread",
//         "Meat",
//         "Snacks",
//         "Tiffin",
//         "Launch",
//         "Dinner",
//         "Breakfast",
//         "Fruit",
//     ]);

//     return (
//         <div className="accordion" id="filterAccordion">
//             {/* All Categories */}
//             <div className="accordion-item">
//                 <h2 className="accordion-header" id="headingCategories">
//                     <button
//                         className="accordion-button "
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#collapseCategories"
//                         aria-expanded="true"
//                         aria-controls="collapseCategories">
//                         All Categories
//                     </button>
//                 </h2>
//                 <div
//                     id="collapseCategories"
//                     className="accordion-collapse collapse show"
//                     aria-labelledby="headingCategories">
//                     <div className="accordion-body">
//                         {categoryList.map((category, index) => (
//                             <div key={category._id} className="form-check">
//                                 <input
//                                     className="form-check-input"
//                                     type="radio"
//                                     name="category"
//                                     id={category._id}
//                                 />
//                                 <label
//                                     className="form-check-label text-capitalize"
//                                     htmlFor={category._id}>
//                                     {category.title}{" "}
//                                     {/* <span className="text-muted">
//                                         ({category.count})
//                                     </span> */}
//                                 </label>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <hr />

//             {/* Price */}
//             <div className="accordion-item">
//                 <h2 className="accordion-header" id="headingPrice">
//                     <button
//                         className="accordion-button collapsed"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#collapsePrice"
//                         aria-expanded="false"
//                         aria-controls="collapsePrice">
//                         Price
//                     </button>
//                 </h2>
//                 <div
//                     id="collapsePrice"
//                     className="accordion-collapse collapse show"
//                     aria-labelledby="headingPrice">
//                     <div className="accordion-body">
//                         <label htmlFor="priceRange" className="form-label">
//                             Price: 50 — 1,500
//                         </label>
//                         <input
//                             type="range"
//                             className="form-range"
//                             id="priceRange"
//                         />
//                     </div>
//                 </div>
//             </div>
//             <hr />

//             {/* Rating */}
//             {/* <div className="accordion-item">
//                 <h2 className="accordion-header" id="headingRating">
//                     <button
//                         className="accordion-button collapsed"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#collapseRating"
//                         aria-expanded="false"
//                         aria-controls="collapseRating">
//                         Rating
//                     </button>
//                 </h2>
//                 <div
//                     id="collapseRating"
//                     className="accordion-collapse collapse show"
//                     aria-labelledby="headingRating">
//                     <div className="accordion-body">

//                         {ratings.map((rating, index) => (
//                             <div key={index} className="form-check">
//                                 <input
//                                     className="form-check-input"
//                                     type="checkbox"
//                                     id={`rating-${index}`}
//                                 />
//                                 <label
//                                     className="form-check-label"
//                                     htmlFor={`rating-${index}`}>
//                                     {[...Array(5)].map((_, i) => (
//                                         <span key={i} className="star-icon">
//                                             <FaStar
//                                                 color={
//                                                     i < rating.value
//                                                         ? "gold"
//                                                         : "lightgray"
//                                                 }
//                                             />
//                                         </span>
//                                     ))}{" "}
//                                     {rating.label}
//                                 </label>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <hr /> */}

//             {/* Popular Keyword */}
//             <div className="accordion-item">
//                 <h2 className="accordion-header" id="headingKeywords">
//                     <button
//                         className="accordion-button collapsed"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#collapseKeywords"
//                         aria-expanded="false"
//                         aria-controls="collapseKeywords">
//                         Popular Keyword
//                     </button>
//                 </h2>
//                 <div
//                     id="collapseKeywords"
//                     className="accordion-collapse collapse show"
//                     aria-labelledby="headingKeywords">
//                     <div className="accordion-body">
//                         <div className="d-flex flex-wrap">
//                             {keywords.map((keyword, index) => (
//                                 <button
//                                     key={index}
//                                     type="button"
//                                     className="btn keyword  rounded-pill m-1">
//                                     {keyword}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FilterAccordion;

import { useContext, useEffect, useState } from "react";
import "./FilterAccordion.css";
import ProductCategoryContext from "shared/context/ProductCategoryContext";

const FilterAccordion = ({ onCategoryChange }) => {
    const [categoryList, setCategoryList] = useState([]);
    const { categories, loading: categoryLoading } = useContext(
        ProductCategoryContext
    );

    useEffect(() => {
        if (!categoryLoading) {
            setCategoryList(categories);
        }
    }, [categories, categoryLoading]);

    const handleCategorySelection = (event) => {
        onCategoryChange(event.target.value);
    };

    return (
        <div className="accordion" id="filterAccordion">
            {/* All Categories */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingCategories">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCategories"
                        aria-expanded="true"
                        aria-controls="collapseCategories">
                        All Categories
                    </button>
                </h2>
                <div
                    id="collapseCategories"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingCategories">
                    <div className="accordion-body">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="category"
                                value=""
                                id=""
                                onChange={handleCategorySelection}
                            />
                            <label className="form-check-label text-capitalize">
                                All Products
                            </label>
                        </div>
                        {categoryList.map((category) => (
                            <div key={category._id} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    value={category.title}
                                    id={category._id}
                                    onChange={handleCategorySelection}
                                />
                                <label
                                    className="form-check-label text-capitalize"
                                    htmlFor={category._id}>
                                    {category.title}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr />

            {/* Additional filters like Price and Popular Keywords */}
        </div>
    );
};

export default FilterAccordion;

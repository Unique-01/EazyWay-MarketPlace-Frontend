import React from "react";
import { Link } from "react-router-dom";
// import './CategoriesSidebar.css';
const CategoriesSidebar = () => {
    const categories = [
        { name: "Fruits & Vegetables" },
        { name: "Frozen Foods" },
        { name: "Creams and Body" },
        { name: "Dairy and Breakfast" },
        { name: "Drinks and Juice" },
        { name: "Seasonings" },
        { name: "Biscuits and Snacks" },
    ];

    return (
        <div className="card categories-sidebar">
            <div className="card-header bg-white pb-0 border-primary pt-3">
                <h5 className="card-title category-sidebar-title">
                    Categories
                </h5>
            </div>
            <ul className="list-group list-group-flush py-2">
                {categories.map((category, index) => (
                    <li key={index} className={`list-group-item border-0 category-sidebar-list-item my-1  `}>
                        <Link to="" className="category-sidebar-name">
                            {category.name}
                        </Link>
                    </li>
                ))}
                <li className="list-group-item view-all">
                    <Link to="">+ View all Categories</Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoriesSidebar;

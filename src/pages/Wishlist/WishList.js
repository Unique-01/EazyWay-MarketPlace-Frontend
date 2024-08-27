import WishListCard from "./WishListItem";
import WishListItem from "pages/Products/products.json";
import "./WishList.css";

const WishList = () => {
    return (
        <div className="container my-5">
            <div className="table-responsive">
                <table className="table border">
                    <thead>
                        <tr className="text-uppercase table-head">
                            <th scope="col" className="">
                                Product
                            </th>
                            <th scope="col">Price</th>
                            <th scope="col"> Stock Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {WishListItem.map((product, index) => (
                            <WishListCard key={index} product={product} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;

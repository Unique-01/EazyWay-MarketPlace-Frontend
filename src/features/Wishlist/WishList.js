import WishListCard from "./WishListItem";
import WishListItem from "features/Products/products.json";
import "./WishList.css";
import { useWishlist } from "shared/context/WishListContext";

const WishList = () => {
    const { wishlistItems } = useWishlist();
    console.log(wishlistItems)
    return (
        <div className="container my-5">
            <div className="table-responsive">
                <table className="wishlist-table table border">
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
                        {wishlistItems.map((product, index) => (
                            <WishListCard key={index} product={product} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;

import Helmet from "react-helmet";
import { useQuery } from "react-query";
import HomeProduct from "../Home/HomeProduct";

const Products = () => {
    const { data: products } = useQuery("allProducts", () =>
        fetch(`${process.env.REACT_APP_API_URL}api/products/`).then((res) =>
            res.json()
        )
    );
    return (
        <div className="container mx-auto my-14">
            <Helmet>
                <title>Products</title>
            </Helmet>
            <div className="title">
                <h3 className="text-2xl my-9 font-bold text-center">
                    Our products
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {products &&
                    products.map((product) => (
                        <HomeProduct key={product._id} product={product} />
                    ))}
            </div>
        </div>
    );
};

export default Products;

import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import HomeProduct from "./HomeProduct";

const HomeProducts = () => {
    const { data: products, isLoading } = useQuery("products", () => {
        return fetch(`${process.env.REACT_APP_API_URL}api/products/`).then(
            (response) => response.json()
        );
    });
    return (
        <div>
            <div className="mb-24">
                <h2 className="text-4xl text-primary font-bold text-center">
                    Our Products
                </h2>
            </div>
            <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {isLoading ? (
                    <Loading />
                ) : (
                    products?.map((product) => (
                        <HomeProduct
                            key={product._id}
                            product={product}
                        ></HomeProduct>
                    ))
                )}
            </div>
        </div>
    );
};

export default HomeProducts;

// import { useRouter } from "next/router";
// import ProductView from "@/views/produk";
import { useEffect, useState } from "react";

type ProductType = 
{
    id: string;
    name: string;
    price: number;
    size: string;
    category: string;
}

const kategori = () => {
    // const [isLogin, setIsLogin] = useState(false);
    // const { push } = useRouter();
    const [products, setProducts] = useState<ProductType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     if (!isLogin) {
    //         push("/auth/login");
    //     }
    // },[]);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/produk");
            const responsedata = await response.json();
            setProducts(responsedata.data);
        } catch (error) {
            console.error("Error fetching produk:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleRefresh = () => {
        fetchProducts();
    };

    return (
    <div>
        <h1>Daftar Produk</h1>
        <button onClick={handleRefresh} disabled={isLoading}>
            {isLoading ? "Refreshing..." : "Refresh Data"}
        </button>
        {products.map((product:ProductType) => (
        <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Harga: {product.price}</p>
            <p>ukuran: {product.size}</p>
            <p>kategory: {product.category}</p>
            
        </div>
        ))}
    </div>
    );
};

export default kategori;

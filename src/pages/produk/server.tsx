import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/product.type";

type ProductResponse = {
    status: boolean;
    status_code: number;
    data?: ProductType[];
};

const halamanProdukServer = (props: { products: ProductType[] }) => {
    const { products } = props;

    return (
        <div>
            <h1>Halaman Produk Server</h1>
            <TampilanProduk products={products} />
        </div>
    );
};

export default halamanProdukServer;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data produk dari API sebelum merender halaman.
export async function getServerSideProps() {
    try {
        const res = await fetch("http://localhost:3000/api/produk");

        if (!res.ok) {
            return {
                props: {
                    products: [],
                },
            };
        }

        const response: ProductResponse = await res.json();

        return {
            props: {
                products: response.data ?? [],
            },
        };
    } catch {
        return {
            props: {
                products: [],
            },
        };
    }
}

import DetailProduk from "@/views/DetailProduct";
import { ProductType } from "@/types/product.type";

type ProductResponse = {
    status: boolean;
    status_code: number;
    data?: ProductType;
};

const HalamanProdukSSR = ({ product }: { product: ProductType }) => {
    return (
        <div>
            <DetailProduk products={product} />
        </div>
    );
};

export default HalamanProdukSSR;

export async function getServerSideProps({ params }: { params: { produk?: string } }) {
    const productId = params?.produk;

    if (!productId) {
        return {
            notFound: true,
        };
    }

    const res = await fetch(`http://localhost:3000/api/produk/${productId}`);
    const response: ProductResponse = await res.json();

    if (!response.data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product: response.data,
        },
    };
}

import DetailProduk from "@/views/DetailProduct";
import { ProductType } from "@/types/product.type";

type ProductListResponse = {
    status: boolean;
    status_code: number;
    data?: ProductType[];
};

type ProductDetailResponse = {
    status: boolean;
    status_code: number;
    data?: ProductType;
};

const HalamanProdukSSG = ({ product }: { product: ProductType }) => {
    return (
        <div>
            <DetailProduk products={product} />
        </div>
    );
};

export default HalamanProdukSSG;

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/api/produk");
    const response: ProductListResponse = await res.json();

    const paths = (response.data ?? []).map((product) => ({
        params: { produk: product.id },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { produk?: string } }) {
    const productId = params?.produk;

    if (!productId) {
        return {
            notFound: true,
        };
    }

    const res = await fetch(`http://localhost:3000/api/produk/${productId}`);
    const response: ProductDetailResponse = await res.json();

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

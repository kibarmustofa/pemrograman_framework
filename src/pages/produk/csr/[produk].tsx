import DetailProduk from "@/views/DetailProduct";
import fetcher from "@/utils/swr/fetcher";
import { ProductType } from "@/types/product.type";
import { useRouter } from "next/router";
import useSWR from "swr";

type ProductResponse = {
    status: boolean;
    status_code: number;
    data?: ProductType;
};

const HalamanProdukCSR = () => {
    const { query } = useRouter();
    const productId = typeof query.produk === "string" ? query.produk : null;
    const { data, isLoading } = useSWR<ProductResponse>(
        productId ? `/api/produk/${productId}` : null,
        fetcher,
    );

    return (
        <div>
            <DetailProduk products={isLoading ? undefined : data?.data} />
        </div>
    );
};

export default HalamanProdukCSR;

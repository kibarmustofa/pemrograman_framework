import TampilanProduk from "../../views/produk";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
};

type ProductResponse = {
    status: boolean;
    status_code: number;
    data: ProductType[];
};

const kategori = () => {
    const { data } = useSWR<ProductResponse>("/api/produk", fetcher);

    return (
        <div>
            <TampilanProduk products={data?.data} />
        </div>
    );
};

export default kategori;

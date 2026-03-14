import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "@/views/DetailProduct";

const halamanProduk = () => {
    // const router = useRouter();
    // console.log(router); 
    const{ query } = useRouter();
    const{data,error,isLoading} = useSWR(`/api/produk/${query.id}`,fetcher);
    return (
        <div>
           <DetailProduk products={isLoading ? [] : data.data} />
        </div>
        
    );
}
export default halamanProduk; 
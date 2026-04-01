import TampilanProduk from "../../views/produk";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetcher from "../../utils/swr/fetcher";


const kategori = () => {
  // const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  // console.log("products:", products);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);
  //cek apakah data, error, dan isLoading sudah benar

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data.data} />
    </div>
  );
};

export default kategori;

// type ProductType = {
//     id: string;
//     name: string;
//     price: number;
//     image: string;
//     category: string;
// };

// type ProductResponse = {
//     status: boolean;
//     status_code: number;
//     data: ProductType[];
// };

// const kategori = () => {
//     const { data } = useSWR<ProductResponse>("/api/produk", fetcher);

//     return (
//         <div>
//             <TampilanProduk products={data?.data} detailBasePath="/produk/csr" />
//         </div>
//     );
// };

// export default kategori;
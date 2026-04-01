import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/product.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
  // digunakan client-side rendering
  const Router = useRouter();
  // console.log(Router);
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR(
    `/api/produk/${query.produk}`,
    fetcher,
  );
  return (
    <div>
      <DetailProduk products={isLoading ? [] : data.data} />
    </div>
  );

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

// // digunakan server-side rendering
// export async function getServerSideProps({ params }: { params: { produk: string } }) {
//   const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
//   const response = await res.json();
//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

// digunakan static-site generation
// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/produk");
//   const response: { data?: ProductType[] } = await res.json();

//   const paths = (response.data ?? []).map((product) => ({
//     params: { produk: product.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: { params: { produk?: string } }) {
//   const productId = params?.produk;

//   if (!productId) {
//     return {
//       notFound: true,
//     };
//   }

//   const res = await fetch(`http://localhost:3000/api/produk/${productId}`);
//   const response: { data?: ProductType } = await res.json();

//   if (!response.data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

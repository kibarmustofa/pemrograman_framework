import { useRouter } from "next/router";

const halamanProduk = () => {
    // const router = useRouter();
    // console.log(router); 
    const{ query } = useRouter();
    return (
        <div>
            <head>
                <title>Halaman Produk</title>
            </head>
           <h1>Halaman Produk</h1>
           <p>Produk: {query.id}</p>
           <img src="" alt="" />
        </div>
        
    );
}
export default halamanProduk;
import { useRouter } from "next/router";

const HalamanToko = () => {
    // const Router = useRouter();
    // console.log(Router);

    const { query } = useRouter();

    return (
        <div>
            <h1>Halaman Toko</h1> 
            
            <p>  
                {/* kalau mau memnculkan seluruh segmen dapat menggunakankode ini */}
                {/* nama toko: {Array.isArray(query.slug) ? query.slug.join("-") : query.slug}  */}
                Nama Toko: {`${query.slug && query.slug[0] + "-" + query.slug[1]}`} 
            </p>
            <p>
                Kategori: {Array.isArray(query.slug) ? query.slug[0] : "Semua Kategori"}
            </p>
        </div>

    );
};
export default HalamanToko;
import { useRouter } from "next/router";

const HalamanKategori = () => {
    const { query } = useRouter();
    const { slug } = query;

    return (
        <div>
            <h1>Halaman Kategori</h1>
            
            <p>Daftar Parameter URL (Slug):</p>
            <br />
                {Array.isArray(slug) ? (
                    slug.map((item, index) => (
                        <li key={index}>Segment {index + 1}: {item}</li>
                    ))
                ) : (
                    <li>{slug}</li>
                )}
           <br />
            {/* Contoh penggunaan spesifik seperti di kode sebelumnya */}
            <p>
                Nama Gabungan: {Array.isArray(slug) ? slug.join(" - ") : slug}
            </p>
        </div>
    );
};

export default HalamanKategori;
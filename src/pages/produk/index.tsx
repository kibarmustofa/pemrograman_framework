import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProdukPage = () => {
    // Perbaikan: useState harus menggunakan kurung siku [] bukan {}
    const [isLogin, setIsLogin] = useState(false);
    const { query, push } = useRouter();

    useEffect(() => {
        // Logika simulasi: Jika ada query auth=true, anggap sudah login
        if (query.auth === "true") {
            setIsLogin(true);
        }

        // Jika tidak login, tendang ke login
        if (!isLogin && query.auth !== "true") {
            push("/auth/login");
        }
    }, [isLogin, query.auth, push]);

    // Mencegah konten muncul sebelum diredirect
    if (!isLogin && query.auth !== "true") return <p>Loading...</p>;

    return (
        <div>
            <h1>Produk User Page</h1>
            <p>Status: Anda Berhasil Login!</p>
        </div>
    );
};

export default ProdukPage;
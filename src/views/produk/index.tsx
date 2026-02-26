import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Hero from "./hero";
import Main from "./main";

const ProductView = () => {
    // Inisialisasi state login (Gunakan [] bukan {})
    const [isLogin, setIsLogin] = useState(false);
    const { query, push } = useRouter();

    useEffect(() => {
        // Simulasi pengecekan status auth melalui query atau session
        if (query.auth === "true") {
            setIsLogin(true);
        }

        // Jika tidak login, redirect otomatis ke halaman login
        if (!isLogin && query.auth !== "true") {
            push("/auth/login");
        }
    }, [isLogin, query.auth, push]);

    // Tampilkan loading jika sedang dalam proses redirect
    if (!isLogin && query.auth !== "true") {
        return <div className="flex justify-center items-center h-screen">Redirecting...</div>;
    }

    return (
        <div>
            <Hero />
            <Main />
            <footer className="p-4 bg-gray-200 text-center">
                Produk User Page Content
            </footer>
        </div>
    );
};

export default ProductView;
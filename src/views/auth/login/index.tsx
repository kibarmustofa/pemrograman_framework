import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.scss";

const HalamanLogin = () => {
    const { push } = useRouter();
    const handlerLogin = () => {
        push("/produk?auth=true");
    }
    return (
        /* Penerapan Tailwind: flex, flex-col, items-center, justify-center, min-h-screen */
        <div className={`${styles.login} flex flex-col items-center justify-center min-h-screen bg-gray-100`}>
            {/* Penerapan Tailwind: text-3xl, font-bold, text-blue-700, mb-4 */}
            <h1 className="text-3xl font-bold text-blue-700 mb-4">Halaman Login</h1>
            
            {/* Penerapan Tailwind: bg-blue-500, hover:bg-blue-600, text-white, py-2, px-6, rounded-lg */}
            <button 
                onClick={handlerLogin} 
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
                Login
            </button> 
            
            <div className="mt-6 text-center">
                <h2 className="text-red-500 border border-red-500 rounded-md px-4 py-1 text-sm inline-block">
                    Belum punya akun?
                </h2>
                <br />
                <Link href="/auth/register" className="text-blue-500 hover:underline mt-2 block">
                    Ke Halaman Register
                </Link>
            </div>
        </div>
    );
};
export default HalamanLogin;
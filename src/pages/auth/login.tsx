import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        push("/produk?auth=true");
    }
    return (
        <div>
            <h1>Halaman Login</h1>
            <button onClick={handlerLogin}>Login</button> <br />
            {/* <button onClick={() => push("/produk")}>login</button> <br /> */}
            <br /><br />
            <p>Belum punya akun?</p>

            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>
    );
};
export default HalamanLogin;   
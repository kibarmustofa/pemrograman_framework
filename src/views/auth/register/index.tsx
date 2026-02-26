import styles from "./register.module.css";
import Link from "next/link";

const RegisterView = () => (
    <div className={styles.container}>
        <h1 className={styles.title}>Halaman Register</h1>
        <Link href="/auth/login">Sudah punya akun? Login</Link>
    </div>
);
export default RegisterView;
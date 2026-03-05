import styles from "../styles/404.module.scss";
import Link from "next/link";

const custom404 = () => {
  return (
    <div
      className={`${styles.error} flex flex-col items-center justify-center min-h-screen bg-gray-100 text-white font-mono`}
    >
      <head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </head>
      <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-10 max-w-4xl">
        <div className={styles.card}>
            <div className="w-full max-w-sm">
            <img
                src="/page-not-found.png"
                alt="Page Not Found"
                className="w-full h-auto"
            />
            </div>
            <div className={styles.content}>
            <h1 className="text-6xl font-black text-pink-500 mb-4">
                404-Halaman Tidak Ditemukan
            </h1>
            <p className="text-indigo-400 text-gray-600 mb-8">
                Maaf, halaman yang Anda cari tidak ditemukan mohon kembali ke halaman
                utama.
            </p>
            </div>
            <Link href="/" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Kembali ke Halaman Utama
            </Link>
        </div>
      </div>
    </div>
  );
};

export default custom404;

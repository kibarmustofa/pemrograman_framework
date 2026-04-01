import styles from "@/pages/produk/product.module.scss";
import Link from "next/link"; // Ditambahkan kembali agar routing dari kode sebelumnya tetap berjalan

type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
};

type TampilanProdukProps = {
    products?: ProductType[];
    detailBasePath?: string;
};

const SKELETON_COUNT = 6;
const rupiahFormatter = new Intl.NumberFormat("id-ID");

const TampilanProduk = ({
    products,
    detailBasePath = "/produk",
}: TampilanProdukProps) => {
    return (
        <div className={styles.produk}>
            <h1 className={styles.produk__title}>Daftar Produk</h1>

            <div className={styles.produk__content}>
                {products === undefined ? (
                    <>
                        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                            <div key={index} className={styles.produk__content__skeleton}>
                                <div className={styles.produk__content__skeleton__image}></div>
                                <div className={styles.produk__content__skeleton__name}></div>
                                <div className={styles.produk__content__skeleton__category}></div>
                                <div className={styles.produk__content__skeleton__price}></div>
                            </div>
                        ))}
                    </>
                ) : products.length > 0 ? (
                    <>
                        {products.map((product: ProductType, index: number) => (
                           
                            <Link
                                href={`${detailBasePath}/${product.id}`} key={product.id} className={styles.produk__content__item}
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <div className={styles.produk__content__item__image}>
                                    <img src={product.image} alt={product.name} width={200} />
                                </div>
                                <h4 className={styles.produk__content__item__name}>{product.name}</h4>
                                <p className={styles.produk__content__item__category}>
                                    {product.category}
                                </p>
                                <p className={styles.produk__content__item__price}>
                                    Rp {rupiahFormatter.format(product.price)}
                                </p>
                            </Link>
                        ))}
                    </>
                ) : (
                    <p className={styles.produk__stateText}>Belum ada data produk.</p>
                )}
            </div>
        </div>
    );
};

export default TampilanProduk;

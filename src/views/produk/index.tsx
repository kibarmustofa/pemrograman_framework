import styles from "@/pages/produk/product.module.scss";

type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
};

type TampilanProdukProps = {
    products?: ProductType[];
};

const SKELETON_COUNT = 6;
const rupiahFormatter = new Intl.NumberFormat("id-ID");

const TampilanProduk = ({
    products,
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
                            <div
                                key={product.id}
                                className={styles.produk__content__item}
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
                            </div>
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

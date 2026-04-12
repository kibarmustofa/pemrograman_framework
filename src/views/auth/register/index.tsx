import styles from "./register.module.scss";
import Link from "next/link";

const RegisterView = () => (
  <div className={styles.register}> {/* Ganti container jadi register */}
    <h1 className={styles.register__title}>Halaman Register</h1>
    
    <div className={styles.register__form}> {/* Tambahkan pembungkus form */}
      <div className={styles.register__form__item}>
        <label
          htmlFor="email"
          className={styles.register__form__item_label}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className={styles.register__form__item_input}
        />
      </div>

      <div className={styles.register__form__item}>
        <label
          htmlFor="Fullname"
          className={styles.register__form__item_label}
        >
          Fullname
        </label>
        <input
          type="text"
          id="Fullname"
          name="Fullname"
          placeholder="Fullname"
          className={styles.register__form__item_input}
        />
      </div>

      <div className={styles.register__form__item}>
        <label
          htmlFor="Password"
          className={styles.register__form__item_label}
        >
          Password
        </label>
        <input
          type="password"
          id="Password"
          name="Password"
          placeholder="Password"
          className={styles.register__form__item_input}
        />
      </div>

      <button type="submit">
        Register
      </button>

      <p className={styles.register__form__item__text}>
        <Link href="/auth/login">Sudah punya akun? Login</Link>
      </p>
    </div>
  </div>
);

export default RegisterView;
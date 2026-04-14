import Link from "next/link";
import styles from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();
  const [error, setError] = useState("");

  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: event.currentTarget.email.value,
      password: event.currentTarget.Password.value,
      callbackUrl,
    });

    if (!res?.error) {
      setIsLoading(false);
      push(callbackUrl);
    } else {
      setIsLoading(false);
      setError(res.error === "CredentialsSignin" ? "Wrong email or password" : res.error);
    }
  };

  return (
    <div className={styles.login}>
      {error && <p className={styles.login__error}>{error}</p>}
      
      <h1 className={styles.login__title}>Halaman Login</h1>
      
      <div className={styles.login__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__form__item}>
            <label htmlFor="email" className={styles.login__form__item_label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={styles.login__form__item_input}
              required
            />
          </div>

          <div className={styles.login__form__item}>
            <label htmlFor="Password" className={styles.login__form__item_label}>
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="Password"
              placeholder="Password"
              className={styles.login__form__item_input}
              required
            />
          </div>

          <button 
            type="submit" 
            className={styles.login__form_item_button} 
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>

          {/* --- PENAMBAHAN TOMBOL GOOGLE SESUAI GAMBAR --- */}
          <br /> <br />
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
            className={styles.login__form_item_button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "sign in with google"}
          </button>
        </form>

        <p className={styles.login__form__item__text}>
          tidak punya akun? <Link href="/auth/register">Ke Halaman Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
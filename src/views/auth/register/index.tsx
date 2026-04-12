import Link from "next/link";
import styles from "./register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(""); // Reset error setiap kali submit
    setIsLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const fullname = formData.get("Fullname") as string;
    const password = formData.get("Password") as string;

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, fullname, password }),
      });

      if (response.status === 200) {
        form.reset();
        setIsLoading(false);
        push("/auth/login");
      } else {
        setIsLoading(false);
        const result = await response.json();
        setError(
          response.status === 400 ? "User already exists" : "An error occurred"
        );
      }
    } catch (err) {
      setIsLoading(false);
      setError("Network error, please try again.");
    }
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Halaman Register</h1>
      
      <div className={styles.register__form}>
        {/* Tampilkan pesan error jika ada */}
        {error && <p style={{ color: "red", marginBottom: "10px", fontSize: "14px" }}>{error}</p>}
        
        <form onSubmit={handleSubmit}>
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
              required
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
              required
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
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>

        <p className={styles.register__form__item__text}>
          Sudah punya akun? <Link href="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterView;

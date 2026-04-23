import { useRouter } from "next/router";
import Navbar from "../navbar";
// 1. Tambahkan import font Roboto
import { Roboto } from "next/font/google";

const disableNavbar = ['/auth/login', '/auth/register', '/404'];

// 2. Inisialisasi font Roboto dengan subset dan weight yang diinginkan
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type appShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: appShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    // 3. Tambahkan className dari roboto ke tag <main>
    <main className={roboto.className}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
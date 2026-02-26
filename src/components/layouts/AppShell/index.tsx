import { useRouter } from "next/router";
import Navbar from "../navbar";

const disableNavbar = ['/auth/login', '/auth/register'];

type appShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: appShellProps) => {
  
  const { children } = props;
  const { pathname } = useRouter();
  const router = useRouter();
  console.log(router);
  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      {/* <div>footer</div> */}
    </main>
  );
};

export default AppShell;

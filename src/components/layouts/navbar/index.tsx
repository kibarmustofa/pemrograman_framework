import syles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const {data} = useSession()
  //const { data: session } = useSession()
  // console.log("session", session)
  return (
    <div className={syles.navbar}>
         <div className="big">
          <h1>navbar</h1>
          </div>
          {data ? (
            <button onClick={() => signOut()}>Sign Out</button>
          ) : (
            <button onClick={() => signIn()}>Sign In</button>
          )}
    </div>
  );
};

export default Navbar;
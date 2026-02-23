import Navbar from "../navbar";

type appShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: appShellProps) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
      <div>footer</div>
    </main>
  );
};

export default AppShell;

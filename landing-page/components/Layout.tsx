import Head from "next/head";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full">{children}</div>
    </>
  );
};

export default Layout;

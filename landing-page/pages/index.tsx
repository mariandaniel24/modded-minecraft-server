import Layout from "../components/Layout";

const name = "Community Name";

const Home = () => {
  return (
    <Layout>
      <main
        style={{ backgroundImage: "url('/img/background.png')" }}
        className="h-full"
      >
        <div className="text-center w-full h-full flex flex-col justify-between p-4">
          <h1 className=" text-gray-50 sm:text-xl md:text-1xl lg:text-5xl font-sans uppercase">
            {name}
          </h1>
          <div className="flex flex-col">
            <h2 className="text-gray-100 sm:text-md md:text-xl lg:text-3xl">
              Website is still work in progress
            </h2>

            <h3 className="mt-10">
              but you can get in touch with us on Discord !
            </h3>
            <div className="self-end">
              <iframe
                src="https://discord.com/widget?id=398499581228220431&theme=dark"
                width="350"
                height="500"
                allowTransparency
                frameBorder={0}
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;

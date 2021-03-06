import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, liveData }) {
  return (
    <div>
      <Head>
        <title>Black~vibes airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroImage />
      <main className="container px-8 sm:px-16 lg:px-20 mx-auto 2xl:px-6">
        <section className="pt-6 md:pt-10 lg:pt-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-medium">
            Explore Nearby
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ location, distance, img }) => (
              <SmallCard
                key={img}
                location={location}
                distance={distance}
                img={img}
              />
            ))}
          </div>
        </section>
        <section className="pt-6 md:pt-10 lg:pt-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-medium">
            Live Anywhere
          </h2>
          <div className="pt-4 pl-6 ml-[-20px] flex space-x-3 overflow-x-scroll overflow-y-hidden scrollbar-hide">
            {liveData?.map(({ title, img }) => (
              <MediumCard key={img} title={title} img={img} />
            ))}
          </div>
        </section>
        <LargeCard 
          img="https://links.papareact.com/4cj" 
          description="Wishlists curated by Airbnb." 
          buttonText="Get Inspired" 
          title="The Greatest Outdoors" 
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://links.papareact.com/pyp"
  ).then((res) => res.json());
  const liveData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      liveData
    }
  };
}

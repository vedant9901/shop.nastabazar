import dynamic from "next/dynamic";
import useSWR from "swr";

import HomeHead from "../html-heads/HomeHead";
import Loading from "../components/Loading";
import Showcase from "../components/Home/Showcase";

const Intro = dynamic(() => import("../components/Home/Intro"), {
  loading: () => <Loading />,
});
const RecentProducts = dynamic(() => import("../components/Home/RecentProducts"), {
  loading: () => <Loading />,
});
const Categories = dynamic(() => import("../components/Home/Categories"), {
  loading: () => <Loading />,
});
const AboutSection = dynamic(() => import("../components/Home/AboutSection"), {
  loading: () => <Loading />,
});

const StoreListView = dynamic(() => import("../components/StoreList/StoreList"), {
  loading: () => <Loading />,
});

import { fetchDocumentByType } from "../lib/client";

const Home = ({ products }) => {
  const { data, error, isLoading } = useSWR("layout", () => fetchDocumentByType("layout"));

  return (
    <>
      <HomeHead />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Showcase data={data.homePage.slides} />

          {/* <Intro data={data.homePage.introSection} /> */}
          <AboutSection data={data.homePage.aboutSectionText} />

          {products["homePage"] ? (
            <RecentProducts products={products["homePage"]["recentProducts"]} />
          ) : (
            <p>Loading . . . </p>
          )}
          {/* <Categories
            data={data.homePage?.categories}
            categoryData={data.homePage?.categoriesData}
          /> */}
            <StoreListView storeList={data.homePage.storeList} />
        </>
      )}
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3001/layoutData.json");
  const jsonData = await res.json();

  return {
    props: { products: jsonData },
    revalidate: 10, // Re-generate the page every 10 seconds if there are requests
  };
};

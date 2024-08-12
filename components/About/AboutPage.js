// pages/about.js
import Image from "next/image";
import classes from "./AboutPage.module.css"; // Adjust path as needed
import { fetchDocumentByType } from "../../lib/client";
import useSWR from "swr";
import dynamic from "next/dynamic";
import Loading from "../Loading";

const AboutPage = ({ AboutData }) => {
  const { data, error, isLoading } = useSWR("layout", () => fetchDocumentByType("layout"));

  const StoreListView = dynamic(() => import("../StoreList/StoreList"), {
    loading: () => <Loading />,
  });

  return (
    <section className={classes.main}>
      <div className="relative w-full h-80">
        {/* <Image 
          src="/path/to/your/image.jpg" // Replace with your image path
          alt="bed sheets black and white"
          layout="fill"
          objectFit="cover"
          priority
        /> */}
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
          Who are we?
        </h2>
      </div>
      <div className={classes.content}>
        <h3 className="text-2xl font-semibold">Nasta Bazar</h3>
        {data?.homePage?.aboutSectionText ? (
          Object.keys(data?.homePage?.aboutSectionText).map((key, text) => (
            <p key={key} className="mt-4">
              {data?.homePage?.aboutSectionText[key]}
            </p>
          ))
        ) : (
          <p className="mt-4">No data available.</p>
        )}
      </div>

      <div>
        <StoreListView storeList={data.homePage.storeList} />
      </div>
    </section>
  );
};

export default AboutPage;

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3001/layoutData.json");
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    const jsonData = await res.json();

    return {
      props: { AboutData: jsonData },
      revalidate: 10, // Re-generate the page every 10 seconds if there are requests
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: { AboutData: [] }, // Return empty array or default value
    };
  }
}

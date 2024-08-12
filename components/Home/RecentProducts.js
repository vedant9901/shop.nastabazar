import dynamic from "next/dynamic";
import classes from "./RecentProducts.module.css";
import CustomSwiperSlider from "../SwiperSlider/SwiperSlider";

const ProductCard = dynamic(() => import("../ProductCard"));

const RecentProducts = ({ products }) => {
  return (
    <section className={classes.main}>
      <h2>Our Products</h2>
      {
        <section className="w-full  mx-auto flex flex-wrap items-center justify-between">
          <CustomSwiperSlider products={products} />
        </section>
      }
    </section>
  );
};

export default RecentProducts;

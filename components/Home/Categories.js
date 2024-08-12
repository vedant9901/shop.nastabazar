import dynamic from "next/dynamic";
import classes from "./Categories.module.css";
import SwiperComponent from "../../components/ProductSlider/ProductSlider.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryFailure, setCategoryRequest, setCategorySuccess } from "../../redux/action/actions.js";
import { useEffect } from "react";

// Dynamic import for CategoryCard component
const CategoryCard = dynamic(() => import("./CategoryCard"));

// Categories component
const Categories = ({ data, categoryData }) => {
  const selectedCategory = useSelector((state) => state.CategoryReducer.selectedCategory);

  const dispatch = useDispatch();

  useEffect(()=>{
    onCategoryClick(data[0]['_key']);
  },[])

  const onCategoryClick = (id) =>{
    dispatch(setCategoryRequest());
    try {
      dispatch(setCategorySuccess(id));
      // dispatch(setCategoryProductsSuccess(id));
      console.log(categoryData[0][id], categoryData)
    } catch (error) {
      dispatch(setCategoryFailure(error.message));
    }
  }
  return (
    <section className={classes.main}>
      {/* <h2>{translations?.featuredCategories}</h2> */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 w-full text-center">Products by Categories</h1>
        <SwiperComponent categories={data} onCategoryClick={onCategoryClick}/>
      </div>
      <p>{selectedCategory}asd</p>
    </section>
  );
};

export default Categories;

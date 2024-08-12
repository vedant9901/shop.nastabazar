import React from "react";
import StoreList from "../StoreList/StoreList";
import classes from "../Home/RecentProducts.module.css";

function StoreListView({ storeList }) {
  return (
    <>
      {storeList.map((storeData, index) => {
        return (
        <section className="flex flex-col gap-[60px] px-[20px] pb-[50px]">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <StoreList storeList={storeList} />
          </div>
        </section>)
      })}
    </>
  );
}

export default StoreListView;

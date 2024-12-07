<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { useState, useEffect } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> f80040d (fixed)
=======
import React from "react";
import { useState, useEffect } from "react";
>>>>>>> c67bc75 (Sprint Mission 5 Final)
import ItemCard from "./ItemCard";
import { getProducts } from "../../../api/itemApi";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    // Mobile viewport
    return 1;
  } else if (width < 1280) {
    // Tablet viewport
    return 2;
  } else {
    // Desktop viewport
    return 4;
  }
};

function BestItemsSection() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const fetchSortedData = async ({ orderBy, pageSize }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

<<<<<<< HEAD
<<<<<<< HEAD
    // 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 디팬던시 배열이 변경되면 하위 코드 실행
    // 가져온 데이터 나타내기
    fetchSortedData({ orderBy: "favorite", pageSize });

    // 이벤트 리스너 제거 (*이벤트 중첩 방지)
=======
    // 화면 크기 변경할 때마다 pageSize를 다시 계산해 넣음
=======
    // 이벤트 리스너 추가
>>>>>>> c67bc75 (Sprint Mission 5 Final)
    window.addEventListener("resize", handleResize);

    // 디팬던시 배열이 변경되면 하위 코드 실행
    // 가져온 데이터 나타내기
    fetchSortedData({ orderBy: "favorite", pageSize });

<<<<<<< HEAD
    // Cleanup function
>>>>>>> f80040d (fixed)
=======
    // 이벤트 리스너 제거 (*이벤트 중첩 방지)
>>>>>>> c67bc75 (Sprint Mission 5 Final)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <div className="bestItemsContainer">
      <h1 className="sectionTitle">베스트 상품</h1>

      <div className="bestItemsCardSection">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestItemsSection;

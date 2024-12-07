import React, { useEffect, useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { getProducts } from "../../../api/itemApi";
import ItemCard from "./ItemCard";
import PagenationBar from "../../../components/UI/PaginationBar";
import { ReactComponent as SortIcon } from "../../../assets/images/icons/ic_sort.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/ic_search.svg";
import DropdownList from "../../../components/UI/DropdownList";

const getPageSize = () => {
  const width = window.innerWidth;

  if (width < 768) {
    return 4;
  } else if (width < 1280) {
    return 6;
  } else {
=======
=======
import { Link } from "react-router-dom";
>>>>>>> c67bc75 (Sprint Mission 5 Final)
import { getProducts } from "../../../api/itemApi";
import ItemCard from "./ItemCard";
import PagenationBar from "../../../components/UI/PaginationBar";
import { ReactComponent as SortIcon } from "../../../assets/images/icons/ic_sort.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/ic_search.svg";
import DropdownList from "../../../components/UI/DropdownList";

const getPageSize = () => {
  const width = window.innerWidth;

  if (width < 768) {
    return 4;
  } else if (width < 1280) {
    return 6;
  } else {
<<<<<<< HEAD
    // Desktop viewport
>>>>>>> f80040d (fixed)
=======
>>>>>>> c67bc75 (Sprint Mission 5 Final)
    return 10;
  }
};

function AllItemsSection() {
<<<<<<< HEAD
<<<<<<< HEAD
  const [orderBy, setOderBy] = useState("recent");
=======
  const [orderBy, setOrderBy] = useState("recent");
>>>>>>> f80040d (fixed)
=======
  const [orderBy, setOderBy] = useState("recent");
>>>>>>> c67bc75 (Sprint Mission 5 Final)
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [itemList, setItemList] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [totalPageNum, setTotalPageNum] = useState();

<<<<<<< HEAD
<<<<<<< HEAD
  //데이터 받아오기 및 정렬/페이지나누기
=======
>>>>>>> f80040d (fixed)
=======
  //데이터 받아오기 및 정렬/페이지나누기
>>>>>>> c67bc75 (Sprint Mission 5 Final)
  const fetchSortedData = async ({ orderBy, page, pageSize }) => {
    const products = await getProducts({ orderBy, page, pageSize });
    setItemList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
  };

<<<<<<< HEAD
<<<<<<< HEAD
  //정렬&드롭다운
  const handleSortSelection = (sortOption) => {
    setOderBy(sortOption);
=======
  const handleSortSelection = (sortOption) => {
    setOrderBy(sortOption);
>>>>>>> f80040d (fixed)
=======
  //정렬&드롭다운
  const handleSortSelection = (sortOption) => {
    setOderBy(sortOption);
>>>>>>> c67bc75 (Sprint Mission 5 Final)
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

<<<<<<< HEAD
<<<<<<< HEAD
    //화면크기 변경시 페이지사이즈 다시 계산
    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy, page, pageSize });

=======
    // 화면 크기 변경할 때마다 pageSize를 다시 계산해 넣음
    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy, page, pageSize });

    // Cleanup function
>>>>>>> f80040d (fixed)
=======
    //화면크기 변경시 페이지사이즈 다시 계산
    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy, page, pageSize });

>>>>>>> c67bc75 (Sprint Mission 5 Final)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, page, pageSize]);

<<<<<<< HEAD
<<<<<<< HEAD
  //토글 드롭다운 기본값
=======
>>>>>>> f80040d (fixed)
=======
  //토글 드롭다운 기본값
>>>>>>> c67bc75 (Sprint Mission 5 Final)
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

<<<<<<< HEAD
<<<<<<< HEAD
  //전달받은 pageNumbber로 페이지 적용(setPage)
=======
>>>>>>> f80040d (fixed)
=======
  //전달받은 pageNumbber로 페이지 적용(setPage)
>>>>>>> c67bc75 (Sprint Mission 5 Final)
  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <div className="allItemsSectionHeader">
<<<<<<< HEAD
<<<<<<< HEAD
        <h1 className="sectionTitle">전체 상품</h1>
=======
        <h1 className="sectionTitle">판매 중인 상품</h1>
>>>>>>> f80040d (fixed)
=======
        <h1 className="sectionTitle">전체 상품</h1>
>>>>>>> c67bc75 (Sprint Mission 5 Final)
        <Link to="/additem" className="loginLink button">
          상품 등록하기
        </Link>
      </div>

      <div className="allItemsSectionHeader">
        <div className="searchBarWrapper">
          <SearchIcon />
          <input
            className="searchBarInput"
<<<<<<< HEAD
<<<<<<< HEAD
            placeholder="검색할 상품을 입력해주세요"
=======
            placeholder="검색할 상품을 입력해 주세요"
>>>>>>> f80040d (fixed)
=======
            placeholder="검색할 상품을 입력해주세요"
>>>>>>> c67bc75 (Sprint Mission 5 Final)
          />
        </div>
        <div className="sortButtonWrapper">
          <button
            className="sortDropdownTriggerButton"
            onClick={toggleDropdown}
          >
            <SortIcon />
          </button>
          {isDropdownVisible && (
            <DropdownList onSortSelection={handleSortSelection} />
          )}
        </div>
      </div>

      <div className="allItemsCardSection">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>

      <div className="paginationBarWrapper">
<<<<<<< HEAD
<<<<<<< HEAD
        <PagenationBar
=======
        <PaginationBar
>>>>>>> f80040d (fixed)
=======
        <PagenationBar
>>>>>>> c67bc75 (Sprint Mission 5 Final)
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default AllItemsSection;

import React from "react";
import { useState } from "react";
import { createProduct } from "../../api/itemApi";
import FileInput from "./FileInput.jsx";
// import AddItemNav from "./AddItemNav.jsx";
import "./AddItemPage.css";

const INITIAL_VALUES = {
  name: "",
  price: 0,
  description: "",
  images: null,
  tags: "",
};

function AddItemPage({ onSubmitSuccess }) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("description", values.description);
    formData.append("images", values.images);
    formData.append("tags", values.tags);
    let result;
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      result = await createProduct(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    const { product } = result;
    setValues(INITIAL_VALUES);
    onSubmitSuccess(product);
  };

  return (
    <form className="ProductPostForm" onSubmit={handleSubmit}>
      <div className="AddItemNav">
        <a>상품 등록하기</a>
        <button
          type="submit"
          disabled={isSubmitting}
          className="register-button"
        >
          등록
        </button>
      </div>
      <label htmlFor="images">상품 이미지</label>
      <FileInput name="images" value={values.images} onChange={handleChange} />
      <label htmlFor="name">상품명</label>
      <input
        title="상품명"
        placeholder="상품명을 입력해주세요"
        className="ProductPostForm input"
        name="title"
        value={values.title}
        onChange={handleInputChange}
      />
      <label htmlFor="description">상품 소개</label>
      <textarea
        itle="상품 소개"
        placeholder="상품 소개를 입력해주세요"
        name="description"
        value={values.description}
        onChange={handleInputChange}
      />
      <label htmlFor="price">판매 가격</label>
      <input
        type="number"
        name="price"
        value={values.price}
        placeholder="가격을 입력하세요"
        onChange={handleChange}
        style={{ textAlign: "left" }}
      />
      <label htmlFor="tags">태그</label>
      <input
        itle="태그"
        placeholder="태그를 입력해주세요"
        name="tags"
        value={values.tags}
        onChange={handleInputChange}
      />
      {submittingError && <div>{submittingError.message}</div>}
    </form>
  );
}

export default AddItemPage;

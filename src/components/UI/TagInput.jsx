import React, { useState } from "react";
import styled, { css } from "styled-components";

const inputStyle = css`
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.gray[1]};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[0]};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.blue[0]};
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 18px;
  }
`;

const InputField = styled.input`
  ${inputStyle}
`;

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[2]};
  border-radius: 16px;
  padding: 4px 8px;
  margin: 4px;
`;

const TagText = styled.span`
  margin-right: 8px;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
`;

function TagInput({ id, value, placeholder }) {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault(); // 기본 동작 방지
      const trimmedValue = inputValue.trim();
      setTags((prevTags) => {
        if (prevTags.includes(trimmedValue)) return prevTags; // 중복 방지
        //console.log(trimmedValue);
        return [...prevTags, trimmedValue]; // 새로운 태그 추가
      });
      setInputValue(""); // 입력 필드 초기화
    }
  };

  const handelRemoveTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove)); // 태그 삭제
  };

  return (
    <div>
      <Label htmlFor={id}>상품 태그</Label>
      <InputField
        type="text"
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTag}
      />
      <div>
        {tags.map((tag, index) => (
          <Tag key={tag}>
            <TagText>{tag}</TagText>
            <RemoveButton onClick={() => handelRemoveTag(index)}>
              x
            </RemoveButton>
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default TagInput;

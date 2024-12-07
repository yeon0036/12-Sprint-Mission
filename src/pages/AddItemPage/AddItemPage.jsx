import React, { useState } from "react";
import {
  Button,
  Container,
  FlexContainer,
  SectionTitle,
} from "../../styles/CommonStyles";
import styled from "styled-components";
import ImageUploade from "../../components/UI/ImgUpload";
import InputItem from "../../components/UI/InputItem";
import TagInput from "../../components/UI/TagInput";

const TitleSection = styled(FlexContainer)`
  margin-bottom: 16px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: 24px;
  }
`;

function AddItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);

  const isSubmitDisabled = !name || !description || !price || !tags;

  return (
    <Container>
      <TitleSection>
        <SectionTitle>상품 등록하기</SectionTitle>
        <Button type="submit" disabled={isSubmitDisabled}>
          등록
        </Button>
      </TitleSection>

      <InputSection>
        <ImageUploade title="상품 이미지" />

        <InputItem
          id="name"
          value={name}
          label="상품명"
          onChange={(e) => setName(e.target.value)}
          placeholder="상품명을 입력해주세요"
        />

        <InputItem
          id="description"
          value={description}
          label="상품 설명"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="상품 설명을 입력해주세요"
          isTextArea
        />

        <InputItem
          id="price"
          value={price}
          label="판매가격"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="판매 가격을 입력해주세요"
        />

        <TagInput id="tags" value={tags} placeholder="태그를 입력해주세요" />
      </InputSection>
    </Container>
  );
}

export default AddItemPage;

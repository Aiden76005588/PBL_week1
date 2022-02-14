import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Layout = styled.section`
  width: 500px;
  height: 100vh;
  margin: 20px auto;
  background: #02343f;
  position: relative;
  padding-top: 30px;
  h2 {
    text-align: center;
    color: #f0edcc;
  }
`;

const Input = styled.input`
  display: block;
  width: 70%;
  height: 50px;
  margin: 60px auto;
`;

const AddButton = styled.button`
  display: block;
  width: 70%;
  height: 50px;
  margin: 60px auto;
`;

function PostMemo() {
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <h2>카드 추가하기</h2>
        <form
          action="submit"
          onClick={() => {
            navigate();
          }}
        >
          <Input value="제목"></Input>
          <Input value="설명" placeholder="예시"></Input>
          <Input value="예시" placeholder="예시"></Input>
        </form>

        <AddButton
          onClick={() => {
            navigate(-1);
          }}
        >
          추가하기
        </AddButton>
      </Layout>
    </>
  );
}

export default PostMemo;

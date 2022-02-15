import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addMemoFB } from "../redux/modules";

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
  const dispatch = useDispatch();
  const text_title = useRef(null);
  const text_describe = useRef(null);
  const text_example = useRef(null);

  //   const addMemoList = () => {
  //     addDoc(collection(db, "mymemo"), {
  //       title: text_title,
  //       describe: text_describe,
  //       example: text_example,
  //     });
  //   };

  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <h2>카드 추가하기</h2>
        <div>
          <Input type="text" ref={text_title} placeholder="제목"></Input>
          <Input type="text" ref={text_describe} placeholder="설명"></Input>
          <Input type="text" ref={text_example} placeholder="예시"></Input>
        </div>

        <AddButton
          onClick={() => {
            dispatch(
              addMemoFB({
                text_title: text_title.current.value,
                text_describe: text_describe.current.value,
                text_example: text_example.current.value,
              })
            );
            window.location.replace("/");
          }}
        >
          추가하기
        </AddButton>
      </Layout>
    </>
  );
}

export default PostMemo;

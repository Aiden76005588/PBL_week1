import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addMemoFB } from "../redux/modules";
import { useNavigate } from "react-router-dom";

const Layout = styled.section`
  width: 500px;
  height: 100vh;
  margin: 20px auto;
  background: #02343f;
  position: relative;
  padding-top: 30px;
  border-radius: 20px;
  h2 {
    text-align: center;
    color: #f0edcc;
  }
`;
const InputBackground = styled.div`
  width: 75%;
  height: 150px;
  background: #6a7ba2;
  border: 0;
  border-radius: 15px;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    margin: 0 70% 5px 0;
    color: white;
  }
`;
const Input = styled.input`
  display: block;
  width: 80%;
  height: 50px;
  margin: 0px auto;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
`;

const AddButton = styled.button`
  display: block;
  width: 70%;
  height: 50px;
  margin: 60px auto;
  border: 0;
  border-radius: 15px;
  font-size: 20px;
`;

function PostMemo() {
  const dispatch = useDispatch();
  const text_title = useRef(null);
  const text_describe = useRef(null);
  const text_example = useRef(null);

  const navigate = useNavigate();
  // navigate("/", { replace: true });
  // window.location.replace("/");
  // window.location.reload();

  const addMemoList = async () => {
    await dispatch(
      addMemoFB({
        text_title: text_title.current.value,
        text_describe: text_describe.current.value,
        text_example: text_example.current.value,
      })
    );

    navigate("/", { replace: true });
    // window.location.replace("/");
  };
  console.log(text_title);
  return (
    <>
      <Layout>
        <h2>카드 추가하기</h2>
        <div>
          <InputBackground className="input-background">
            <h3>단어</h3>
            <Input type="text" ref={text_title} placeholder="제목"></Input>
          </InputBackground>
          <InputBackground>
            <h3>설명</h3>
            <Input type="text" ref={text_describe} placeholder="설명"></Input>
          </InputBackground>

          <InputBackground>
            <h3>예시</h3>
            <Input type="text" ref={text_example} placeholder="예시"></Input>
          </InputBackground>
        </div>

        <AddButton onClick={addMemoList}>추가하기</AddButton>
      </Layout>
    </>
  );
}

export default PostMemo;

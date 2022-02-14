import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

const Card = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 20px;
  background: #f0edcc;

  h4 {
    text-decoration: underline;
  }
  /* display: block; */
  .cardContents {
    padding: 30px;
    div {
      margin-bottom: 10px;
    }
  }
`;

const AddCard = styled.button`
  position: absolute;
  background: #f0edcc;
  width: 80px;
  height: 80px;
  top: 85%;
  left: 70%;
  border: none;
  border-radius: 50%;
  &:hover {
    background: #e8db46;
    cursor: pointer;
  }
  &:active {
    background: #f2ea91;
  }
`;

function Memo() {
  const [title, setTitle] = useState("단어입니다");
  const [describe, setDescribe] = useState("설명입니다");
  const [example, setExample] = useState("예시입니다");

  const navigate = useNavigate();
  const cardList = useSelector((state, idx) => [state]);

  // const cardList2 = cardList.map((el, idx) => {
  //   return <div>el.title</div>;
  // });
  // console.log("cardList2", cardList2);

  return (
    <>
      <Layout>
        <h2>나만의 메모장</h2>
        {cardList.map((el, index) => {
          console.log(el.memo.cards.title);
          return (
            <Card>
              <div className="cardContents" key={index} id={index}>
                <div>
                  <h4>단어</h4>
                  <span>{el.memo.cards.title}</span>
                </div>
                <div>
                  <h4>설명</h4>
                  <span>{el.memo.cards.describe}</span>
                </div>
                <div>
                  <h4>예시</h4>
                  <span>{el.memo.cards.example}</span>
                </div>
              </div>
            </Card>
          );
        })}
        <Card>
          <div className="cardContents" id="1">
            <div>
              <h4>단어</h4>
              <span>{title}</span>
            </div>
            <div>
              <h4>설명</h4>
              <span>{describe}</span>
            </div>
            <div>
              <h4>예시</h4>
              <span>{example}</span>
            </div>
          </div>
        </Card>
        <AddCard
          onClick={() => {
            navigate("/post");
          }}
        >
          <FontAwesomeIcon icon={faPlus} size="3x" />
        </AddCard>
      </Layout>
    </>
  );
}

export default Memo;

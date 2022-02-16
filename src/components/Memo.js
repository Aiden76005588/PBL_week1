import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadMemoFB } from "../redux/modules";

const Layout = styled.section`
  width: 500px;
  height: auto;
  margin: 20px auto;
  background: #02343f;
  position: relative;
  padding-top: 30px;
  border-radius: 20px;
  box-shadow: 10px 10px 100px 10px rgba(0, 0, 0, 0.6);
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
  border-radius: 20px;
  h4 {
    text-decoration: underline;
  }
  /* display: block; */
  .cardContents {
    padding: 30px;
    color: gray;
    div {
      margin-bottom: 10px;
    }
  }
  .example {
    color: royalblue;
  }
`;

const AddCard = styled.button`
  position: fixed;
  background: #787338;
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
  const navigate = useNavigate();
  const cardList = useSelector((state, idx) => state.memo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMemoFB());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <h2>나만의 메모장</h2>

        {cardList.list &&
          cardList.list.map((el, index) => {
            return (
              <Card key={index}>
                <div className="cardContents">
                  <div>
                    <h4>단어</h4>
                    <span>{el.title}</span>
                  </div>
                  <div>
                    <h4>설명</h4>
                    <span>{el.describe}</span>
                  </div>
                  <div>
                    <h4>예시</h4>
                    <span className="example">{el.example}</span>
                  </div>
                </div>
              </Card>
            );
          })}

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

import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadMemoFB } from "../redux/modules";
import Spinner from "./Spinner";

const Layout = styled.section`
  width: 500px;
  height: auto;
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
  const is_loading = useSelector((state) => state.memo.is_loading);

  useEffect(() => {
    dispatch(loadMemoFB());
  }, []);

  return (
    <>
      <Layout>
        <h2>나만의 메모장</h2>
        {/* {cardList.list &&
          cardList.list.map((el, index) => {
            return console.log(el);
          })} */}
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
                    <span>{el.example}</span>
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
        {!is_loading && <Spinner />}
      </Layout>
    </>
  );
}

export default Memo;

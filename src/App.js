import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "선릉 고기 맛집",
  ]);

  let posts = "강남 고기 맛집";
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  // 제목바꾸기 function 만들기
  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = "여자 코트 추천";
    글제목변경(newArray);
  }

  // 순서변경 function 만들기
  function 순서바꾸기() {
    let newArray = [...글제목];
    newArray[0] = 글제목[1];
    newArray[1] = 글제목[2];
    newArray[2] = 글제목[0];
    글제목변경(newArray);
  }

  // 글제목 번호 입력
  let [번호, 번호수정] = useState(0);

  // 클릭 모달창 이벤트 구현
  let [modal, modal변경] = useState(false);

  // 입력값 생성
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        버튼
      </button>

      {글제목.map((글, i) => {
        return (
          <div className="list">
            <h3
              onClick={() => {
                번호수정(i);
              }}
            >
              {" "}
              {글} ❤️{" "}
              <span
                // onClick ={() => {}} 여기에서 매개변수에 i를 다시 넣어줬는데 이것때문에 각각의 개별로 카운트가 되지 않았음.
                onClick={() => {
                  let copy = [...따봉];
                  copy[i]++;
                  따봉변경(copy);
                }}
              >
                {따봉[i]}
              </span>
            </h3>
            <p>2월 18일 발행</p>
            <hr />
          </div>
        );
      })}

      {/* input 데이터를 state로 저장해보기 */}
      {/* <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input> */}

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy.push(입력값);
            글제목변경(copy);
          }}
        >
          저장
        </button>
      </div>

      {modal === true ? <Modal 글제목={글제목} 번호={번호} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h2>{props.글제목[props.번호]}</h2>
        <p>날짜</p>
        <p>상태내용</p>
      </div>
      <div>
        <div></div>
      </div>
    </>
  );
}

export default App;

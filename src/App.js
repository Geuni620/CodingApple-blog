import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "선릉 초밥 맛집",
  ]);

  let posts = "강남 고기 맛집";

  let [따봉, 따봉변경] = useState([0, 1, 2]);
  let [ModalSwitch, ModalSwitchChange] = useState(false);

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = 글제목[1];
    newArray[1] = 글제목[2];
    newArray[2] = 글제목[0];
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map((item, i) => {
        return (
          <div className="list">
            <h3>
              {item}{" "}
              <span
                onClick={() => {
                  따봉변경(따봉[i] + 1);
                  console.log("hi");
                }}
              >
                👍
              </span>{" "}
              {따봉[i]}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import styled, { keyframes } from "styled-components";
import arrow_left from "images/arrow_left.png";

const Keyboard = ({ isModal }) => {
  const [value, setValue] = useState([]);
  const [isShift, setIsShift] = useState(false);
  const [collection, setCollection] = useState(COLLECTION_DATA);
  const Hangul = require("hangul-js");

  const handleClick = (event) => {
    const item = event.target.textContent;

    if (item === "Shift") {
      return handleShift();
    }

    if (item === "Back") {
      return handleDelete();
    }

    return handleCreate(item);
  };

  const handleCreate = (item) => {
    setValue((prev) => [...prev, item]);
  };

  const handleDelete = () => {
    setValue((prev) => prev.slice(0, prev.length - 1));
  };

  const handleAllDelete = () => {
    setValue([]);
  };

  const handleShift = () => {
    setIsShift(() => !isShift);
    let newCollection = [...collection];
    if (!isShift) {
      newCollection[1] = pressed;
      return setCollection(newCollection);
    }
    newCollection[1] = nomal;
    return setCollection(newCollection);
  };

  return (
    <Overlay>
      <Wapper>
        <TestWapper>
          <TestBox>
            <input
              type="text"
              defaultValue={Hangul.assemble(value)}
              placeholder="마음껏 테스트 해보세요"
            />
            <BackArrow onClick={isModal}>
              <img src={arrow_left} alt="playKeyboardLogo" />
            </BackArrow>
            <AllDeleteX onClick={handleAllDelete}>✕</AllDeleteX>
          </TestBox>
        </TestWapper>
        <KeyWapper>
          {collection.map((list) => (
            <KeyUl key={list}>
              {list.map((item) => (
                <KeyLi key={item} onClick={handleClick}>
                  {item}
                </KeyLi>
              ))}
            </KeyUl>
          ))}
        </KeyWapper>
      </Wapper>
    </Overlay>
  );
};

export default Keyboard;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  width: 100%;
  height: 100%;
  top: 0;
  backdrop-filter: blur(2px);
  z-index: 999;
`;

const In = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0,100%,0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const Wapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: fixed;
  width: 100%;
  bottom: 0;

  animation: ${In} 0.9s;
`;

const TestWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: white;
`;

const TestBox = styled.div`
  display: flex;
  position: relative;

  max-width: 400px;
  width: 80%;
  padding: 10px;
  border-radius: 20px;
  background-color: #eeeef3;

  input {
    border: none;
    background-color: inherit;
    :focus {
      outline: none;
    }
  }
`;

const BackArrow = styled.div`
  position: absolute;
  left: -35px;

  cursor: pointer;
`;

const AllDeleteX = styled.div`
  position: absolute;
  right: -25px;
  font-size: 18px;
`;

const KeyWapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  gap: 5px;
  padding: 20px;
  background-color: #eeeef3;
`;

const KeyUl = styled.ul`
  display: flex;
  gap: 8px;
`;

const KeyLi = styled.li`
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  /* color: rgba(0, 0, 0, 0.4); */

  cursor: pointer;

  font-weight: 600;
  font-size: 20px;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (max-width: 449px) {
    font-size: 13px;
  }
`;

const COLLECTION_DATA = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅛ", "ㅕ", "ㅑ", "ㅐ", "ㅔ"],
  ["ㅁ", "ㄴ", "ㅇ", "ㄹ", "ㅎ", "ㅗ", "ㅓ", "ㅏ", "ㅣ"],
  ["Shift", "ㅋ", "ㅌ", "ㅊ", "ㅍ", "ㅠ", "ㅜ", "ㅡ", "Back"],
];
const nomal = ["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅛ", "ㅕ", " ㅑ", "ㅐ", "ㅔ"];
const pressed = ["ㅃ", "ㅉ", "ㄸ", "ㄲ", "ㅆ", "ㅛ", "ㅕ", "ㅑ", "ㅒ", "ㅖ"];

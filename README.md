<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> 
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>

# Playkeyboard Webstore Project

## 🔍 미리보기

> Main

&nbsp; &nbsp; &nbsp;<img src="https://ifh.cc/g/txdQ7s.jpg"  width="450" height="300"/> <img src="https://ifh.cc/g/XQTYRm.png"  width="130" height="300"/>
<br/>
<br/>

> ProductDetail

&nbsp; &nbsp; &nbsp;<img src="https://ifh.cc/g/4CHgwh.jpg"  width="450" height="300"/> <img src="https://ifh.cc/g/9jVcJz.png"  width="130" height="300"/>

<br/>
<br/>
<br/>
<br/>

## 🚩 프로젝트 개요

- 진행기간 : 10/04 ~ 10/07
- 과제주관 : (주)비트바이트
- 참여명단 : 김민욱, 소재현, 손소희, 유광현, 정훈조, 조민재
- DEMO : [DEMO](https://extraordinary-basbousa-068052.netlify.app/)

<br/>
<br/>

## 🛠 요구사항과 해결방법

> MISSION 1

### 주어진 디자인레퍼런스(Figma)와 API명세서를 이용하여 반응형 웹디자인을 구현

#### UI 및 레이아웃 구현 및 정상 작동<br/>

- #### 레이아웃<br/>
  &nbsp;&nbsp;저희 팀은 레이아웃을 구현하기 위해 **Atomic Design 패턴의 Template 개념**을 활용했습니다. Template는 안에 들어갈 내용, 데이터를 포함한 자식컴포넌트에 따라 크기와 모양에 영향을 받지 않습니다. 한마디로 내용이 없는 뼈대이며 자식 컴포넌트가 변형되거나 사라지더라도 레이아웃 그 형태는 유지 되어야 합니다.

```js
function MainTemplate({
  headerComponent,
  descriptionComponent,
  categoryTabComponent,
  productListComponent,
  footerComponent,
}) {
  return (
    <>
      <HeaderContainer>{headerComponent}</HeaderContainer>
      <Container>
        <DescriptionWrapper>{descriptionComponent}</DescriptionWrapper>
        <CategoryWrapper>{categoryTabComponent}</CategoryWrapper>
        <ProductListWrapper>{productListComponent}</ProductListWrapper>
      </Container>
      <FooterContainer>{footerComponent}</FooterContainer>
    </>
  );
}
```

- #### UI 정상작동<br/>
  &nbsp;&nbsp;개발환경에서는 개발자가 개발의도에 맞게 UI를 테스트해보기 때문에 UI가 비정상적으로 작동하기 힘듭니다. 서비스를 배포하고 사용자의 예상하지 못한 사용에 에러가 나기 때문에 정상작동을 무조건 보장하기 위한 코드보다는 에러가능성을 줄이거나 즉시 유지보수가 가능한 코드를 작성하기 위해 노력했습니다.

```js
//잘못된 state의 활용

const [isModal, setIsModal] = useState(false);

//이전 코드
const modalToggleFuntion = () => {
  setIsModal(!isModal);
};

//수정 코드
const modalToggleFuntion = () => {
  setIsModal((prev) => !prev);
};
```

<br/>

#### API 통신을 통해 데이터 정상처리<br/>

- #### 별도의 Hook 생성<br/>

```js
function useFetchProductList(category) {
  const [themeData, setThemeData] = useState([]);
  useEffect(() => {
    fetch(`https://api.plkey.app/theme?category=${category}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setThemeData(data);
      });
  }, [category]);

  return themeData;
}

export default useFetchProductList;
```

<br/>

#### 반응형 레이아웃이 정상적으로 작동<br/>

- #### 미디어 쿼리 사용 <br/>
  &nbsp;&nbsp;반응형 웹디자인을 구현하기 위해 미디어쿼리를 사용했으며 Styled Component에서 제공하는 ThemeProvider 메소드를 통해 디바이스 규격을 통일했습니다.

```js
//theme.js

...

const device = {
  mobileS: `only screen and (max-width: 290px)`,
  mobile: `only screen and (max-width: 450px)`,
  tablet: `only screen and (max-width: 768px)`,
  tabletL: `only screen and (max-width: 1024px)`,
};

//사용 예시

const Container = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {...
  }
  @media ${({ theme }) => theme.device.mobile} {...
  }
  @media ${({ theme }) => theme.device.mobileS} {...
  }

```

<br/>
<br/>
<br/>

> MISSION 2

### 유저들에게 키보드 체험을 제공하기 위한 UI 구현

- #### 키보드 체험시 사용자 경험 향상을 위한 애니메이션 적용 <br/>
  체험 종료 시 언마운트로 화면 깜빡임 발생하여 불쾌한 경험을 맞이할것으로 예상되어 점진적 언마운트

```js
//Keyboard.organism.js

return (
  <Overlay>
    <Wapper toggle={state ? 'fadeIn' : 'fadeOut'} />
  </Overlay>
);

const Wapper = styled.div`
  ...
  animation: ${(props) => props.toggle} 0.9s;
`;
```

<br/>
<br/>

## ⚙ 프로젝트 관리 및 설계와 관련된 사항들

<br/>

- ##### 📍Meeting Log [내용보기!]()

- ##### 📍Task [내용보기!]()

- ##### 📍Conventions [내용보기!]()

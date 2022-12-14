<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> 
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>

# Playkeyboard Webstore Project

## π λ―Έλ¦¬λ³΄κΈ°

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

## π© νλ‘μ νΈ κ°μ

- μ§νκΈ°κ° : 10/04 ~ 10/07
- κ³Όμ μ£Όκ΄ : (μ£Ό)λΉνΈλ°μ΄νΈ
- μ°Έμ¬λͺλ¨ : κΉλ―Όμ±, μμ¬ν, μμν¬, μ κ΄ν, μ νμ‘°, μ‘°λ―Όμ¬
- DEMO : [DEMO](https://extraordinary-basbousa-068052.netlify.app/)

<br/>
<br/>

## π  μκ΅¬μ¬ν­κ³Ό ν΄κ²°λ°©λ²

> MISSION 1

### μ£Όμ΄μ§ λμμΈλ νΌλ°μ€(Figma)μ APIλͺμΈμλ₯Ό μ΄μ©νμ¬ λ°μν μΉλμμΈμ κ΅¬ν

#### UI λ° λ μ΄μμ κ΅¬ν λ° μ μ μλ<br/>

- #### λ μ΄μμ<br/>
  &nbsp;&nbsp;μ ν¬ νμ λ μ΄μμμ κ΅¬ννκΈ° μν΄ **Atomic Design ν¨ν΄μ Template κ°λ**μ νμ©νμ΅λλ€. Templateλ μμ λ€μ΄κ° λ΄μ©, λ°μ΄ν°λ₯Ό ν¬ν¨ν μμμ»΄ν¬λνΈμ λ°λΌ ν¬κΈ°μ λͺ¨μμ μν₯μ λ°μ§ μμ΅λλ€. νλ§λλ‘ λ΄μ©μ΄ μλ λΌλμ΄λ©° μμ μ»΄ν¬λνΈκ° λ³νλκ±°λ μ¬λΌμ§λλΌλ λ μ΄μμ κ·Έ ννλ μ μ§ λμ΄μΌ ν©λλ€.

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

- #### UI μ μμλ<br/>
  &nbsp;&nbsp;κ°λ°νκ²½μμλ κ°λ°μκ° κ°λ°μλμ λ§κ² UIλ₯Ό νμ€νΈν΄λ³΄κΈ° λλ¬Έμ UIκ° λΉμ μμ μΌλ‘ μλνκΈ° νλ­λλ€. μλΉμ€λ₯Ό λ°°ν¬νκ³  μ¬μ©μμ μμνμ§ λͺ»ν μ¬μ©μ μλ¬κ° λκΈ° λλ¬Έμ μ μμλμ λ¬΄μ‘°κ±΄ λ³΄μ₯νκΈ° μν μ½λλ³΄λ€λ μλ¬κ°λ₯μ±μ μ€μ΄κ±°λ μ¦μ μ μ§λ³΄μκ° κ°λ₯ν μ½λλ₯Ό μμ±νκΈ° μν΄ λΈλ ₯νμ΅λλ€.

```js
//μλͺ»λ stateμ νμ©

const [isModal, setIsModal] = useState(false);

//μ΄μ  μ½λ
const modalToggleFuntion = () => {
  setIsModal(!isModal);
};

//μμ  μ½λ
const modalToggleFuntion = () => {
  setIsModal((prev) => !prev);
};
```

<br/>

#### API ν΅μ μ ν΅ν΄ λ°μ΄ν° μ μμ²λ¦¬<br/>

- #### λ³λμ Hook μμ±<br/>

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

#### λ°μν λ μ΄μμμ΄ μ μμ μΌλ‘ μλ<br/>

- #### λ―Έλμ΄ μΏΌλ¦¬ μ¬μ© <br/>
  &nbsp;&nbsp;λ°μν μΉλμμΈμ κ΅¬ννκΈ° μν΄ λ―Έλμ΄μΏΌλ¦¬λ₯Ό μ¬μ©νμΌλ©° Styled Componentμμ μ κ³΅νλ ThemeProvider λ©μλλ₯Ό ν΅ν΄ λλ°μ΄μ€ κ·κ²©μ ν΅μΌνμ΅λλ€.

```js
//theme.js

...

const device = {
  mobileS: `only screen and (max-width: 290px)`,
  mobile: `only screen and (max-width: 450px)`,
  tablet: `only screen and (max-width: 768px)`,
  tabletL: `only screen and (max-width: 1024px)`,
};

//μ¬μ© μμ

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

### μ μ λ€μκ² ν€λ³΄λ μ²΄νμ μ κ³΅νκΈ° μν UI κ΅¬ν

- #### ν€λ³΄λ μ²΄νμ μ¬μ©μ κ²½ν ν₯μμ μν μ λλ©μ΄μ μ μ© <br/>
  μ²΄ν μ’λ£ μ μΈλ§μ΄νΈλ‘ νλ©΄ κΉλΉ‘μ λ°μνμ¬ λΆμΎν κ²½νμ λ§μ΄ν κ²μΌλ‘ μμλμ΄ μ μ§μ  μΈλ§μ΄νΈ

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

## β νλ‘μ νΈ κ΄λ¦¬ λ° μ€κ³μ κ΄λ ¨λ μ¬ν­λ€

<br/>

- ##### πMeeting Log [λ΄μ©λ³΄κΈ°!](https://www.notion.so/wecode/1-Meeting-Log-3e78770757bd4b1980c38dd7cd5b85d0)

- ##### πTask [λ΄μ©λ³΄κΈ°!](https://www.notion.so/wecode/1-Task-0929fa9d611343d1b74757c36ceb0aca)

- ##### πConventions [λ΄μ©λ³΄κΈ°!](https://www.notion.so/wecode/Team-Conventions-6dc83f662105424a860339fadc72066f)

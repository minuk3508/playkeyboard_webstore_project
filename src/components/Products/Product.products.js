import styled from 'styled-components';
import HashTags from '../Products/hashTag.products';
import download from '../../images/arrow_down.png';
import diamond from '../../images/diamond.png';
function Product({ keyboard }) {
  return (
    <KeyboardWrapper>
      <KeyboardImg src={keyboard.imageUrl} alt="play keyboard's screenshot" />
      <KeyboardName>{keyboard.name}</KeyboardName>
      <HashTags length={keyboard.hashtag.length} hashTags={keyboard.hashtag} />
      <FiguresWrapper>
        <DownloadWrapper>
          <div>
            <img src={download} alt="arrow_down" />
          </div>
          <span>{keyboard.downloads}</span>
        </DownloadWrapper>
        <PriceWrapper>
          <div>
            <img src={diamond} alt="diamond" />
          </div>
          <span>{keyboard.price}</span>
        </PriceWrapper>
      </FiguresWrapper>
    </KeyboardWrapper>
  );
}

const KeyboardWrapper = styled.div``;
const KeyboardImg = styled.img`
  display: block;
  width: 164px;
  border-radius: 8px;
  margin-bottom: 8px;
`;
const KeyboardName = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #42444c;
`;
const FiguresWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 12px;
  }
`;
const DownloadWrapper = styled.div`
  div {
    margin-right: 3px;
  }
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #aaabb3;
  }
  display: flex;
  align-items: center;
`;
const PriceWrapper = styled.div`
  div {
    margin-right: 3px;
  }
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #7dc9fc;
  }
  display: flex;
  align-items: center;
`;
export default Product;

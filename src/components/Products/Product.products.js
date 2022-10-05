import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HashTags from '../Products/hashTag.products';
import download from '../../images/arrow_down.png';
import diamond from '../../images/diamond.png';
import theme from '../../theme';

function Product({ keyboard }) {
  return (
    <KeyboardWrapper>
      <Link to={`/productdetail/${keyboard._id}`}>
        <KeyboardImg src={keyboard.imageUrl} alt="play keyboard's screenshot" />
        <KeyboardName>{keyboard.name}</KeyboardName>
        <HashTags
          length={keyboard.hashtag.length}
          hashTags={keyboard.hashtag}
        />
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
      </Link>
    </KeyboardWrapper>
  );
}

const KeyboardWrapper = styled.div`
  //손소희
  width: 25%;
  margin: 10px 0;
  padding: 0 10px;
  cursor: pointer;
  @media ${theme.device.tabletL} {
    width: 33.3%;
    margin: 5px 0;
    padding: 0 8px;
  }
  @media ${theme.device.tablet} {
    width: 50%;
    margin: 5px 0;
    padding: 0 8px;
  }
`;

const KeyboardImg = styled.img`
  width: 100%;
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

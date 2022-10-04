import styled from 'styled-components';
import useFetchProductList from '../../hooks/useFetchProductList.hook';
import Product from './Product.products';

function ProductList({ category }) {
  const { data } = useFetchProductList(category);
  return (
    <Container>
      {data?.map((el) => (
        <Product key={el._id} keyboard={el} />
      ))}
    </Container>
  );
}
export default ProductList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  padding: 0px 15px;
`;

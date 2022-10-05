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
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
`;

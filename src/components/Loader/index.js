import styled from "styled-components";

const Loader = () => {
  return (
    <Container>
      <Load />
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  background-color: #1a1b1e;
  opacity: 0.7;
`;

const Load = styled.div`
  width: 6vh;
  height: 6vh;

  border: 0.7vh solid #f3f3f3;
  border-top: 0.7vh solid #ff417d;
  border-radius: 50%;

  animation: spin 1.3s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

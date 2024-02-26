import styled from "styled-components";

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .buttons{
    margin: 5px;
    display: flex;
    gap: 10px;
  }
  a {
    color: #fff;
  }
  h1 {
    justify-content: center;
    text-align: center;
    
  }
  @media (max-width: 992px) {
    h1{
    }
    
  }
`;
export default Wrapper;

import styled from "styled-components";

const Wrapper = styled.section`
  @media (max-width: 992px) {


    
  }

  background-color: #fff;
  min-height: 100vh;
  align-items: center;
  display: block;
  background-color: #e7edfa;

  .form {
    max-width: 400px;
    border-top: 4px solid #5af;
  }

  .form-input {
    border: 1px solid #222;
    border-radius: 5px;
    color: #222;
  }
  .form-label {
    font-weight: 600;
    display: flex;
    color: #222;
  }
  h3 {
    color: #222;
    justify-content: center;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn-1 {
    display: flex;
    margin: auto;
    margin-top: 5px;
  }
`;

export default Wrapper;

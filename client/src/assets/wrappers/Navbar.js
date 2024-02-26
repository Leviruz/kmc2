import styled from "styled-components";

const Wrapper = styled.nav`
  height: 250px;
  display: flex;
  align-items: center;
  background-color: #fff;
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn{
    border: transparent;
    background-color: transparent;
  }

  .icon{
    font-size: 2rem;
    color: var(--primary-color);
  }
`;
export default Wrapper;

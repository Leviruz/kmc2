import styled from "styled-components";

const Wrapper = styled.nav`
  height: 150px;
  display: flex;
  align-items: center;
  background-color: #fff;
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    border: transparent;
    background-color: transparent;
  }

  .icon {
    font-size: 2rem;
    color: var(--primary-color);
  }
  .dropdown-container {
    cursor: pointer;
    background-color: var(--primary-color);
    padding: 5px 15px;
    border-radius: 15px;
    color: #fff;
  }
  .show-dropdown {
    margin-bottom: 15px;
  }
  .logout {
    background-color: red;
    color: #fff;
    padding: 5px 15px;
    border-radius: 15px;
    cursor: pointer;
  }
`;
export default Wrapper;

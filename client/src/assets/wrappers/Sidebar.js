import styled from "styled-components";

const Wrapper = styled.aside`
 
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  .sidebar-container {
    background: #fff;
    min-height: 100vh;
    height: 100%;
    width: 250px;
    margin-left: -250px;
    transition: margin-left 0.3s ease-in-out;
  }
  .content {
    position: sticky;
    top: 0;
  }
  .show-sidebar {
    margin-left: 0;
  }
  .nav-links {
    display: flex;
    justify-content: center;
    color: #222;
    transition: 0.3s all linear;
  }
  .active {
    color: var(--primary-color);
  }
  .nav-links:hover {
    color: var(--primary-color);
  }
`;
export default Wrapper;

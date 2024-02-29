import Wrapper from "../assets/wrappers/navbar";
import { useDashboardContext } from "../pages/DashboardPage";
import { FaAlignJustify, FaUser } from "react-icons/fa";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
const Navbar = () => {
  const {
    showSidebar,
    toggleSidebar,
    checkDropdown,
    toggleDropdown,
    user,
    logoutUser,
  } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignJustify className="icon" />
        </button>
        <div>Seja bem vindo ao KMControl</div>
        {checkDropdown ? (
          <div onClick={toggleDropdown}>
            <div className="dropdown-container">
              <FaUser /> {user.name} <IoMdArrowDown />
            </div>
          </div>
        ) : (
          <div>
            <div
              className="dropdown-container show-dropdown"
              onClick={toggleDropdown}
            >
              <FaUser /> {user.name} <IoMdArrowUp />
            </div>
            <span className="logout" onClick={logoutUser}>Desconectar</span>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
export default Navbar;

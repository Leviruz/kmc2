import Wrapper from "../assets/wrappers/navbar"
import {useDashboardContext} from "../pages/DashboardPage"
import { FaAlignJustify } from "react-icons/fa";
const Navbar = () => {
  const {showSidebar,toggleSidebar,checkDropdown} = useDashboardContext();
  console.log(showSidebar);
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignJustify className="icon"/>
        </button>
        <div>
          Navbar
        </div>
        <div className="dropdown">
              <div className={checkDropdown?"dropdown-container":"dropdown-container show-dropdown"}></div>
        </div>
      </div>
    </Wrapper>
  );
}
export default Navbar
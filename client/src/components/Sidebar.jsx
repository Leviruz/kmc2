import Wrapper from "../assets/wrappers/Sidebar";
import { useDashboardContext } from "../pages/DashboardPage";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo"
const Sidebar = () => {
  const {showSidebar} = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container  show-sidebar" : "sidebar-container"
        }
      >
        <header>
          <Logo />
        </header>
        <NavLinks />
      </div>
    </Wrapper>
  );
};
export default Sidebar;

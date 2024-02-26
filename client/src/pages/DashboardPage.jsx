import { createContext, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Wrapper from "../assets/wrappers/DashboardPage";

const DashboardContext = createContext();
const DashboardPage = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const [checkDropdown,setCheckDropdown] = useState(false)

  const toggleDropdown = () =>{
    setCheckDropdown(!checkDropdown);
  }
  return (
    <DashboardContext.Provider
      value={{ showSidebar, checkDropdown,toggleSidebar }}
    >
      <Wrapper>
        <main className="dashboard">
          <Sidebar />
          <div>
            <Navbar />
            <div className="page-content">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
export default DashboardPage;

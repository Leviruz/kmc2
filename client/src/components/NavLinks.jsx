import Wrapper from "../assets/wrappers/Sidebar";
import links from "../utils/links";
import {NavLink} from 'react-router-dom'
const NavLinks = () => {
  return <div>
    <Wrapper>

    {links.map((link)=>{
        const {text,path} = link
        return(
            <NavLink to={path} key={text} className="nav-links" end>
                {text}
            </NavLink>
        )
    })}
    </Wrapper>
  </div>;
};
export default NavLinks;

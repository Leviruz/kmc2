import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Homepage";
const Landing = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <h1>Seja bem vindo ao Controle de Kilometragem - KMControl</h1>
          <div className="buttons">
            <button className="btn-1">
              <Link to="/register">Registrar-se</Link>
            </button>
            <button className="btn-1">
              <Link to="/login">Conectar-se</Link>
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default Landing;

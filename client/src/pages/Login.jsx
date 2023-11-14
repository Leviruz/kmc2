import Wrapper from "../assets/wrappers/RegAndLogin";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <p>Entrar</p>
        <FormRow type="email" name="email" defaultValue="" />
        <FormRow type="number" name="CPF" defaultValue="" labelText="CPF" />
        <FormRow type="password" name="senha" defaultValue="" />
        <FormRow
          type="password"
          name="repeatsenha"
          defaultValue=""
          labelText="confirmar senha"
        />
        <button className="btn-1" type="submit">
          Entrar
        </button>
        <p>
          Não tem uma conta? <Link to="/register">Registrar-se</Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;

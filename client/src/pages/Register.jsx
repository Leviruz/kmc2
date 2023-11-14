import Wrapper from "../assets/wrappers/RegAndLogin";
import {Link }from "react-router-dom"
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <p>Registre-se</p>
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
          Registrar
        </button>
        <p>
          Já tem uma conta? <Link to="/login">entrar</Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;

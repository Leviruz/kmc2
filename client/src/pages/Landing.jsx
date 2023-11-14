import {Link} from 'react-router-dom'
import Car from '../components/Car'
import Wrapper from '../assets/wrappers/Homepage'
const Landing = () => {
  return (
    <>
    <Wrapper>
    <button className='btn-1'>
    <Link to="/register">Registrar-se</Link>
    </button>
    <button>
    <Link to="/login">Conectar-se</Link>
    </button>
    <Car/>
    </Wrapper>
    </>
  )
}
export default Landing
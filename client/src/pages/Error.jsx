import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    if (error.status === 404){
        return(
          <>
          <p>404</p>
          </>
        );
    }
  return (
    <div>Error generico</div>
  )
}
export default Error
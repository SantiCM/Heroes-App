import { useNavigate } from "react-router-dom"

export const LoginPages = () => {

  const navigate = useNavigate()

  const onLogin = () => {
    
    navigate("/marvel", {
    
      replace: true
    
    })
  
  } 
  
  return (
  
    <div className="container mt-5">

      <h1>Login</h1>


      <button 
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>

    </div>
    
  )

}
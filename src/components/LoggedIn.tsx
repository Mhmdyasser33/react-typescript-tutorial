import { useState } from "react"

const LoggedIn = () => {
    // ?how to control type of useState hook...!
const [login , setLogin] = useState<boolean>(false) ;
const handleLogin = () =>{
    setLogin(true) ;
}
const handleLogout = () =>{
    setLogin(false) ;
}
  return (
    <>
    <button onClick={handleLogin}></button>
    <button onClick={handleLogout}></button>
    <h1>user is {login ? "Login" : "logout"}</h1>
    </>
  )
}

export default LoggedIn
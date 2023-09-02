type Props = {
  name : string ;
  age : number ;
  logIn : boolean ;
}

const SayHello = ({name , age , logIn} : Props) => {
  return (
    <>
    <h1> Hello {logIn ? name : "Guest"}</h1>
    <h2>my age is {age}</h2>
    </>
  )
}

export default SayHello
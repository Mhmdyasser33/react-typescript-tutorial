type Props = {
   userInfo : {
    name : string ;
    age : number ;
    login : boolean ;
   }
}

const SayHello = ({userInfo} : Props) => {
  return (
    <>
   <h1>{userInfo.name ? `hello ${userInfo.name}` : "hello Guest"}</h1>
   <h2>My age is {userInfo.age}</h2>
    </>
  )
}

export default SayHello
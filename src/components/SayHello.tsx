type Props = {
    loginUserDetails : {
      name : string ,
      age : number ,
      login :boolean
    }[]
}

const SayHello = ({loginUserDetails} : Props) => {

  return (
    <>
      <ul>
         {loginUserDetails.map((item , index) =>(
      <li key={index}>
         {item.name} ----------- {item.age}

      </li>
         ))}
      </ul>
    </>
  )
}

export default SayHello
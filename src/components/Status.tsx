
type Props = {
/*  status : string */
// ! to make a type with a a specific value
  status : "loading" | "success" | "error"
}

const Status = ({status}: Props) => {
   let msg ;
   if(status === "loading"){
    msg = "loading..." ;
   }else if(status === "success"){
    msg = "data fetched successfully" ;
   }
   else if(status === "error"){
    msg = "error in fetching data" ;
   }
  return (

    <div>
        <h1>{msg}</h1>
    </div>
  )
}
export default Status ;
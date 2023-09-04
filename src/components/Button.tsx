
type btnProps = {
  //! make a return void because we print a message don't need to return thing..!
    handleClick : ()=> void ;
}
const Button = ({handleClick} : btnProps) => {
  return <button onClick={handleClick}> CLick Me!</button>

}

export default Button


type btnProps = {
     // ? dealing with event and specify type of event here.., mouseEvent here specify the event that user will to and <> this generics specify the element that user will use like button element or input and so on...
    handleClick : (e : React.MouseEvent<HTMLButtonElement> , id : number , name : string )=> void ;
}

const Button = ({handleClick} : btnProps) => {
    // ! take care here use listener () => + function name()  because we send a parameter to function.. , if we did not send parameter ? we did nit use listener () =>
  return <button onClick={(e) => handleClick(e,10,"mohamed")}> CLick Me!</button>

}

export default Button
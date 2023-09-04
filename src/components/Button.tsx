

type btnProps = {
     // ? dealing with event and specify type of event here.., mouseEvent here specify the event that user will to and <> this generics specify the element that user will use like button element or input and so on...
    handleClick : (e : React.MouseEvent<HTMLButtonElement>)=> void ;
}

const Button = ({handleClick} : btnProps) => {
    // ! take care here use using without using listening () => function name , this is used when a function take more than one argument
  return <button onClick={handleClick}> CLick Me!</button>

}

export default Button
import { ChangeEvent } from "react"

type inputProps = {
    value : string ,
    handleChange :(e : ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value , handleChange} : inputProps) => {
  return <input type="text" value={value} onChange={ handleChange}/>
}

export default Input
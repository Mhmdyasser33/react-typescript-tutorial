type Props = {
   children : string
}

const Heading = ({children} : Props) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}

export default Heading
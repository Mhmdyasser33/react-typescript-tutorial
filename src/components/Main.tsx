
 //! how to use style props in typescript
type MainContainerProps = {
    cssStyle : React.CSSProperties
}

export default function Main({cssStyle} : MainContainerProps) {
  return (
    <div style={cssStyle} className="container">Main container </div>
  )
}

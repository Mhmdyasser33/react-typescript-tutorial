import React from "react";

type Props = {
  //! this is used to render anything like ELement or anything
  children : React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
      <h1>i'm layout page </h1>
     <h2>{children}</h2>
    </div>
  )
}
export default Layout ;
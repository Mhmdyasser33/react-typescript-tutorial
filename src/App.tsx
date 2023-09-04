import './App.css'
import Heading from './components/Heading'
/* import SayHello from './components/SayHello' */
import Status from './components/status'
import Layout from './components/Layout'
import Button from './components/Button'
function App() {
 /*  const loginUserDetails = [
    {
      name : "mohamed" ,
      age : 21 ,
      login : true ,
    },
    {
      name : "ahmed" ,
      age : 20 ,
      login : false ,
    },
    {
      name : "ali" ,
      age : 19 ,
      login : true ,
    },
  ] */
  return (
<div className='container'>
 {/* <SayHello loginUserDetails = {loginUserDetails} /> */}
<Status status ="success"/>
{/* here we call heading component but send a children (text here) of type string  */}
<Layout>
<Heading>i'm the heading </Heading>
</Layout>
<Button handleClick={(e) => console.log(e.target)}/>
</div>
  )
}


export default App

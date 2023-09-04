import './App.css'
import Heading from './components/Heading'
/* import SayHello from './components/SayHello' */
import Status from './components/status'
import Layout from './components/Layout'
import Button from './components/Button'
import Input from './components/Input'
import Main from './components/Main'
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
{/* here we use a dynamic css style ? user can make any css code that want to apply to static code */}
<Main cssStyle={{fontSize : "20px" , color : "green" , border : "1px solid red"}}/>
</Layout>
<Button handleClick={(e , id , name) => console.log(e.target , id , name)}/>
<Input value='mohamed' handleChange={(e) => console.log(e.target.value) }/>
 <Main cssStyle={{fontSize : "30px" , color : "red" , border : "1px solid green"}}/>
</div>
  )
}


export default App

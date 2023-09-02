import './App.css'
import SayHello from './components/SayHello'

function App() {
  const loginUserDetails = [
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
  ]
  return (
<div className='container'>
 <SayHello loginUserDetails = {loginUserDetails} />
</div>
  )
}

export default App

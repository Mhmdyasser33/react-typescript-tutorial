import './App.css'
import SayHello from './components/SayHello'

function App() {
  const userData = {
    name :"mohamed" ,
    age : 21 ,
    login : true ,
  }
  return (
<div className='container'>
 <SayHello userInfo={userData} />
</div>
  )
}

export default App

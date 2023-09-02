import './App.css'
import SayHello from './components/SayHello'

function App() {
  return (
<div className='container'>
 <SayHello name="mohamed" age={21} logIn = {false}/>
</div>
  )
}

export default App

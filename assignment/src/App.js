import {  useState} from 'react';
import './component/text.css'
function App() {
  const handelUpClick=()=>{
    let newText=text.toUpperCase()
    settext(newText)

}
const handelOnChange=(event)=>{
  settext(event.target.value)
}
  const[text,settext]=useState(" ")

  return (
  <>
   
 <div className="container">
 <h2 style={{color:"white"}}>Enter Text TO Convert in UpperCase</h2>
    <input className='text-feild' type="text" value={text} onChange={handelOnChange}/><br></br><br></br>
   <button className='btn' onClick={handelUpClick}>Convet To UpperCase</button>
 </div>
 </>
  )
}



export default App;

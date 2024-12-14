import React , {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  
  const [text, setText] = useState(" Enter Text Here ");
  
  const handleText = () =>{
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(new RegExp("[ ]+"));
    setText(newText.join(" "));
  } 


  return (
    <>
      <div className="container">
        <div className={`mb-3 text-${props.mode === 'light'?'dark':'light'} my-5`}>
          <label htmlFor="mybox" className="form-label" ><h1>Enter Your Text Here</h1></label>
          <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{backgroundColor : 'dark'}} value = {text} onChange = {handleOnChange} id="mybox" rows="8"></textarea>        
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LOWERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
        <h1>Your Text Contains</h1>
        <p>{text.split(" ").length-1} words and {text.length} character</p>
        <p>{0.008 * (text.split(" ").length-1)} Minutes required</p>
      </div>
    </>
  )
}

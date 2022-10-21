import React,{useState} from "react";
export default function TextForm(props) {

  let btnCss={
    marginRight:"5px",
  
  }
      
  //  console.log(css.btn.marginright)
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleUpClick=()=>{
        setText(text.toUpperCase())
    }
    const handleDownClick=()=>{
        setText(text.toLowerCase())
    }
    const handleClearText=()=>{
        setText("")
    }
    const [text, setText]=useState('')
    return (
    <div>
      <div className="mb-3 my-3">
        <h1>{props.textHead}</h1>
        <textarea
          className="form-control"
          id="textArea"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter text here"
        ></textarea>
      </div>
      <button style={btnCss} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button style={btnCss}  className="btn btn-primary" onClick={handleDownClick}>Convert to Lowercase</button>
      <button style={btnCss}  className="btn btn-primary" onClick={handleClearText}>Clear Text</button>
      <div className="my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words, {text.length} character</p>
        <p>{(text.split(" ").length-1)*0.008} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

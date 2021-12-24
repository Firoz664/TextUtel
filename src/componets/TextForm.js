import React, { useState } from 'react';
 


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked "+text);
        let newText=text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick=()=>{
        console.log("Uppercase was clicked "+text);
        let newText=text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }

    const handleClClick=()=>{
        console.log("Uppercase was clicked "+text);
        let newText=" ";
        setText(newText)
        props.showAlert("Text cleared!","success");
    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copy to clipboard!","success");
    }
    const handleExtraSpaces = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extraspace!","success");
    }

    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    // eslint-disable-next-line no-unused-vars
    const [text, setText] = useState(' ');
     

    return (
        <>
         
         <div className="container" style={{color:props.mode=== 'dark'?'white': '#042743'}}>
              <h1>{props.heading }</h1>
              <textarea className="form-control my-2"  value={text} onChange={handleOnChange}
               style={{backgroundcolour: props.mode==='dark'? 'grey': 'white', color:props.mode=== 'dark'?'#042743': 'black'}}
                id="myBox" rows="8">{props.heading}</textarea>
              <button className=" btn btn-primary mx-1  my-1" onClick={handleUpClick}>Convert to Uppercase</button>
              <button className=" btn btn-primary mx-1  my-1" onClick={handleLoClick}>Convert to Lowercase</button>
              <button className=" btn btn-primary mx-1  my-1"onClick={handleClClick}>Clear text</button>
              <button className=" btn btn-primary mx-1  my-1" onClick={handleCopy}>Copy to Text</button>
              <button className=" btn btn-primary mx-1  my-1" onClick={handleExtraSpaces}>Remove to Space</button>
         
         </div>
         <div className="container my-2" style={{color:props.mode=== 'dark'?'white': 'black'}}>
             <h3>Your text summary</h3>
             <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
             <p>{0.008*text.split(" ").length}Minures read</p>
             <h4>Preview</h4>
             <p>{text.length>0?text:"Enter something to preview it here"}</p>
             
         </div>
         </>
    )
}

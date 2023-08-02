import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    setText(text.toUpperCase())
  }
  const handleLoerClick = () =>{
    setText(text.toLowerCase())
  }
  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
  }
  const handleRemovespaceClick = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleCopyClick = () =>{
    navigator.clipboard.writeText(text);
  }
  const handleSearchClick = () =>{
    let str = document.querySelector("#searchstr").value
    let ourtxt = text.split(" ");
    var cc = 0;
    for(let i=0;i<ourtxt.length;i++){
      if(ourtxt[i] === str){
        cc++;
      }
    }
    setText2(cc);
  }

  const handlerOnchage = (event) =>{
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  const [text2, setText2] = useState();
  return (
    <div style={{color:props.mode==='#D4FCFF'?'black':'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode,color:props.mode==='#D4FCFF'?'black':'white'}} value={text} onChange={handlerOnchage} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <buttton onClick={handleUpClick} className="btn btn-primary mx-2">Convert to Uppercase</buttton>
            <buttton onClick={handleLoerClick} className="btn btn-primary mx-2">Convert to Lowercase</buttton>
            <buttton onClick={handleClearClick} className="btn btn-primary mx-2">Clear</buttton>
            <buttton onClick={handleRemovespaceClick} className="btn btn-primary mx-2">Remove space</buttton>
            <buttton onClick={handleCopyClick} className="btn btn-primary mx-2">Copy</buttton>
            <div className="container my-3">
              <h2>Your text Summery</h2>
              <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Word {text.trim().length} Characters</p>
              <p>{0.008*text.split(" ").length} Minuts read</p>
            </div>
            <div className="container">
              <h4>Preview</h4>
              <p>{text.length>0?text:"Enter something"}</p>
            </div>
            <div className="container">
              <input type="text" id="searchstr" style={{backgroundColor:props.mode,color:props.mode==='#D4FCFF'?'black':'white'}}/>
              <button onClick={handleSearchClick} type="button" className="btn btn-warning mx-2">Find Number of Word</button>
             <p>Words No : {text2}</p>
            </div>

            {/* ---------------- */}
    </div>
  )
}

import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    setText(text.toUpperCase())
  }
  const handleLoerClick = () =>{
    setText(text.toLowerCase())
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

  const [text, setText] = useState("Enter text her");
  const [text2, setText2] = useState();
  return (
    <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handlerOnchage} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <buttton onClick={handleUpClick} className="btn btn-primary mx-2">Convert to Uppercase</buttton>
            <buttton onClick={handleLoerClick} className="btn btn-primary">Convert to Lowercase</buttton>
            <div className="container my-3">
              <h1>Your text Summery</h1>
              <p>{text.split(" ").length} Word {text.length} Characters</p>
              <p>{0.008*text.split(" ").length} Minuts read</p>
            </div>
            <div className="container">
              <h2>Preview</h2>
              <p>{text}</p>
            </div>
            <div className="container">
              <input type="text" id="searchstr"/>
              <button onClick={handleSearchClick} type="button" className="btn btn-warning mx-2">Find Number of Word</button>
             <p>Words No : {text2}</p>
            </div>
    </div>
  )
}

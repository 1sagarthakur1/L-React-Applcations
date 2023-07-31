import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () =>{
    setText(text.toUpperCase())
  }

  const handlerOnchage = (event) =>{
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter text her");
//   console.log(text);
//   setText("My name is sagar");
  return (
    <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handlerOnchage} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <buttton onClick={handleUpClick} className="btn btn-primary">Convert to Uppercase</buttton>
    </div>
  )
}

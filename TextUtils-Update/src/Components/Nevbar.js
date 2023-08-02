import React from 'react'
import {Link} from 'react-router-dom'

export default function Nevbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{backgroundColor:props.mode}}>
    <div className="container-fluid">
      <h1 className="navbar-brand" href="/">{props.title}</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span  className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color:props.mode==='#D4FCFF'?'black':'white'}}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link  style={{color:props.mode==='#D4FCFF'?'black':'white'}} className='link' to="/">Home</Link>
          </li>
          <li className="nav-item mx-3">
            <Link  style={{color:props.mode==='#D4FCFF'?'black':'white'}} className='link' to="/about">About us</Link>
          </li>
        </ul>
        <div className="form-check mx-2">
          <input className="form-check-input" onClick={props.toggleModelight} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Light
          </label>
        </div>
        <div className="form-check mx-2">
          <input className="form-check-input"  onClick={props.toggleModeRed} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Red
          </label>
        </div>
        <div className="form-check mx-2">
          <input className="form-check-input" onClick={props.toggleModeGreen} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Green
          </label>
        </div>
        <div className="form-check mx-2">
          <input className="form-check-input" onClick={props.toggleModePink} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Pink
          </label>
        </div>
        <div className="form-check mx-2">
          <input className="form-check-input" onClick={props.toggleModeDark} type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Dark
          </label>
        </div>
      </div>
    </div>
  </nav>
  )
}



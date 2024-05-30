import { useState } from "react";
import "./App.css";
import BMI from "./bmi.png"

function App(){
  const[height, setHeight]=useState();
  const[weight, setWeight]= useState();
  const[bmi, setBmi]= useState(null)
  const[bmiStatus, setBmiStatus]= useState("");
  const[error, SetError]= useState("")

  const calculatebmi=()=>{
    const isvalidheight= /^\d+/.test(height)
      const isvalidweight= /^\d+/.test(weight)
    if(isvalidheight&&isvalidweight)
      {
      const hightinMeter= height/100;
      const bmiValue=weight/(hightinMeter * hightinMeter)
      setBmi(bmiValue.toFixed(2))

      
      if(bmiValue<18.5)
      {
        setBmiStatus("Under Weight...");
      }
      else if(bmiValue >=18.5 && bmiValue<24.9) 
      {
        setBmiStatus("Normal Weight...");
      }
      else if(bmiValue>=25 && bmiValue< 29.9)
      {
        setBmiStatus("Over Weight...");
      }
      else
      {
       setBmiStatus("Obese...");
      }
      SetError("")
    }
    else
    {
      setBmiStatus("")
      setBmi(null);
      SetError("Please enter valid number for Height and Weight")
    }
  }

  function clearAll(){
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("")
  }

  return(
    <>
      <div className="bmicontainer">
        <div className="box">
          <img src={BMI} alt="a logo" />
        </div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {error && <p className="error">
            {error}
          </p>}
          <div className="inputcontainer">
            <label htmlFor="height">Height (cm):</label>
            <input type="text"  id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="inputcontainer">
            <label htmlFor="weight">Weight (kg):</label>
            <input type="text"  id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <button onClick={calculatebmi}>Calculate BMI</button>
          <button onClick={clearAll} className="clear">Clear All</button>
          {bmi !==null && (
            <div className="result">
              <p>Your BMI is:{bmi}</p>
              <p>Status: {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App;
import { useState } from 'react'
import './App.css'

function App() {
  const [formObj, setFormObj] = useState({
    fNmae: "",
    lName: "",
    city: "",
    gender: ""
  })


  const inputOnChange = (property,value)=>{
      setFormObj(prevObj=>({
        ...prevObj,
        [property]: value
      }))
  }

  const formSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <>
       <form action="" onSubmit={formSubmit}>
         <input onChange={(e)=>inputOnChange("fNmae",e.target.value)} value={formObj.fNmae} type="text" placeholder='First Name' /> <br />

        <input onChange={(e) => inputOnChange("lName",e.target.value)} value={formObj.lName} type="text" placeholder='Last Name' /> <br />

        <select value={formObj.city} onChange={(e)=>inputOnChange('city',e.target.value)} name="city" id="city">
          <option value="city">City</option>
          <option value="dhaka">Dhaka</option>
          <option value="meherpur">Meherpur</option>
          <option value="kushtia">Kushtia</option>
        </select> <br />

       <label htmlFor="">
        <input onChange={(e)=>inputOnChange('gender',e.target.value)} type="radio" name='gender' value="Male" checked={formObj.gender==="Male"}/>Male

        <input onChange={(e)=>inputOnChange("gender",e.target.value)} type="radio" name='gender' value="Female" checked={formObj.gender==="Female"}/>Female
       </label> <br />

       <button type='submit' >Submit</button>
       </form>
    </>
  )
}

export default App

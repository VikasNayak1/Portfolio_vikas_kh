import React, { useState } from 'react'
import "../styles/Contact.scss";

const FormInput=(props)=>{
  const[focused,setFocused]=useState(false);
  const{label,errorMessage,onChange, id,type, ...inputProps}=props;
  if (type === "textarea") {
    return (
      <div className="formInput">
        <label>{label}</label>
        <textarea {...inputProps} onChange={onChange} rows="4" />
      </div>
    );
  }
  function handleFocus(){
    setFocused(true);
  }

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} required={focused} />
      <span>{errorMessage}</span>
    </div>
  );
  
 
}

const Contact = () => {
  const[values,setValues]=useState({
    name:"",
    email:"",
    message:""
  });
  const input=[
    {
    id:1,
    name: "name",
    type: "text",
    placeholder: "name",
    errorMessage:"name should be 3-16",
    label: "username",
    pattern:"^{3,16}$",
    required:true,
    },
    {
      id:2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage:"It should valied email",
      label: "email",
      required:true,
      },
      {
        id:3,
        name: "textarea",
        type: "textarea",
        placeholder: "message",
        label: "message",
        required:true,
        
        },
      

  ]
   function handleSubmit(e){
    e.preventDefault();
  
 
  } 
  function onChange(e){
    setValues({...values,[e.target.name]: e.target.value})
  
  }
  console.log(values);

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
      <h1>Contact Me</h1>
      {
        input.map((input)=>(
          <FormInput
          key={input.id}
          {...input}
          values={values[input.name]}
          onChange={onChange}
          
          />
        ))
      }
      
      <button type='submit'>Submit</button>
      </form>
     

    </div>
  )
}

export default Contact
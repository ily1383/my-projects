import { useState } from "react"
import inputs from "../constants/inputs"
import {v4} from "uuid"
import ContactsList from "./ContactsList"
import styles from "./contacts.module.css";

function Contacts() {
  const[alert, setAlert] = useState("")
  const[contacts, setContacts] = useState([])
  const[contact, setContact] = useState({
    name:"",
    lastName:"",
    email:"",
    phone:""
  })
  const changeHandler = e =>{
    const name = e.target.name;
    const value = e.target.value;
    setContact(contact=>({...contact,[name]:value}))
  }
  const addHandler =() =>{
    if(
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone 
    ){
     setAlert("Invalid Data Please Try Again!");
     return; 
    }
    setAlert("");
    const newContact = {...contact, id:v4()};
    setContacts((contacts)=>([...contacts, newContact]))
    setContact({
      name:"",
      lastName:"",
      email:"",
      phone:""
      })
  }
  const deleteHandler = id =>{
    const newContacts = contacts.filter(contact=>contact.id !== id);
    setContacts(newContacts);
  }
  return (
    <div className={styles.container}>
      <div className={styles.form}>
      {inputs.map((input, index)=>(
        <input  
        key={index} 
         type={input.type}
         name={input.name}
         placeholder={input.placeholder}
         value={contact[input.name]}
         onChange={changeHandler}/>
        ))}
        <button onClick={addHandler}>Add Button</button>
        </div>
        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
        <ContactsList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default Contacts

import ContactItem from "./ContactItem"
import styles from "./contactslist.module.css";

function ContactsList({contacts , deleteHandler}) {
  return (
    <div className={styles.container}>
      <h1>Contact List</h1>
      <ul className={styles.contacts}>
        {contacts.length ?
          contacts.map(contact=>(
           <ContactItem
           key={contact.id}
           contact={contact}
           deleteHandler={deleteHandler}/>
          ))
           :
          (
            <p className={styles.message}>No Contacts Yet</p>
          )}

      </ul>
    </div>
  )
}

export default ContactsList

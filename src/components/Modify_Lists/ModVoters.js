import React , {useState} from 'react'
import { nanoid } from "nanoid";
import data from "../Voters_Table/MOCK_DATA.json"
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';


export function ModVoters() {

    const [id, setId] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [contacts, setContacts] = useState(data);

    const [addFormData, setAddFormData] = useState({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    });
  
    const [editFormData, setEditFormData] = useState({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        id: addFormData.id,
        first_name: addFormData.first_name,
        last_name: addFormData.last_name,
        email: addFormData.email,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editFormData.id,
        first_name: editFormData.first_name,
        last_name: editFormData.last_name,
        email: editFormData.email,
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        id: contact.id,
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setContacts(newContacts);
    };


    async function AddStudent(event){
      event.preventDefault()
  
      const response = await fetch('http://localhost:4000/api/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  
        },
        body: JSON.stringify({
          id,
          first_name,
          last_name,
          email,
          password, 
        })
      })
  
      const data = await response.json()
  
      console.log(data)

    }
  
    return (
      <div className="modify_voters">
        <h1 style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
            color: '#1d04ad'
        }}> Modify the List of Voters </h1>

        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <React.Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </form>
  
        <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20vh',
                color: '#1d04ad'
            }}> ADD A VOTER </h1>

        <div 
        style ={{          
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'}}>

          <form onSubmit={AddStudent}>
          
          <input
            value={id}
            type="text"
            name="id1"
            required="required"
            placeholder="Enter an id number..."
            onChange={(e)=> setId(e.target.value)}
          />
          <input
            value={first_name}
            type="text"
            name="first_name1"
            required="required"
            placeholder="Enter a first name..."
            onChange={(e)=> setFirstName(e.target.value)}
          />
          <input
            value = {last_name}
            type="text" 
            name="last_name1"
            required="required"
            placeholder="Enter a last name..."
            onChange={(e)=> setLastName(e.target.value)}
          />
          <input
            value ={email}
            type="email"
            name="email1"
            required="required"
            placeholder="Enter an email..."
            onChange={(e)=> setEmail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            name="password1"
            required="required"
            placeholder="Enter a password..."
            onChange={(e)=> setPassword(e.target.value)}
            />
          <input className="button button1" type='submit' value="Add" />
        </form></div>
      </div>
    );
  };

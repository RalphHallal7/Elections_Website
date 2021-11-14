import React , {useState} from 'react'
import { nanoid } from "nanoid";
import data_list3 from "../Lists_Candidats_Tables/List3_Data.json"
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';


export function ModCandidatsList3() {
    const [contacts, setContacts] = useState(data_list3);
    const [addFormData, setAddFormData] = useState({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
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
  
    return (
      <div className="modify_candidates">
        <h1 style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
            color: '#1d04ad'
        }}> Modify the Candidates of List 3 </h1>

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
            }}> ADD A CANDIDATE </h1>


          <div style ={{          
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'}}><form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="id1"
            required="required"
            placeholder="Enter an id number..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="first_name1"
            required="required"
            placeholder="Enter a first name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="last_name1"
            required="required"
            placeholder="Enter a last name..."
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="email1"
            required="required"
            placeholder="Enter an email..."
            onChange={handleAddFormChange}
          />
          <button type="submit" class="button button1">Add</button>
        </form></div>
      </div>
    );
  };

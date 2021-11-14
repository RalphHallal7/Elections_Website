import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.first_name}</td>
      <td>{contact.last_name}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
          class="button button2"
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}
        class="button button2">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
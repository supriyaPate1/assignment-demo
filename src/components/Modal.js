import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({onCancel, closeModal ,editData,setData,data}) => {
  const [editUser,setEditUser]=useState({
   id:editData[0].id, name:editData[0].name,email:editData[0].email,phone:editData[0].phone,website:editData[0].website
  })
 const saveEditData=()=>{
   const userTemp=[{...editUser}]
   const result = data.map(x => {
     const item = userTemp.find(({ id }) => id === x.id);
     return item ? item : x;
    });
   setData(result)
   closeModal("Modal was closed")
 }
  return (
    <div
      className="modal-container"
      // onClick={(e) => {
      //   if (e.target.className === "modal-container")
      //     closeModal();
      // }}
    >
      <div className="modal">
      <div className="modal-header">
            <div className="modal-name"><span>Basic Modal</span></div>
            <div className="modal-close"><span onClick={()=>closeModal()}>X</span></div>
      </div>
        <section className="modal-main">
          
            <form className="form">
              <div className="form-field">
                <label for="name">
                  <span className="star">*</span>Name:
                </label>
                <input type="text" name="name" id="name" onChange={(event)=>setEditUser({...editUser,name:event.target.value})} required value={editUser.name}/>
              </div>
              <div className="form-field">
                <label for="email">
                  <span className="star">*</span>Email:{" "}
                </label>
                <input type="email" name="email" id="email" value={editUser.email} onChange={(event)=>setEditUser({...editUser,email:event.target.value})} required />
              </div>
              <div className="form-field">
                <label for="phone">
                  <span className="star">*</span>Phone:{" "}
                </label>
                <input name="phone" id="phone" value={editUser.phone} onChange={(event)=>setEditUser({...editUser,phone:event.target.value})} required />
              </div>
              <div className="form-field">
                <label for="email">
                  <span className="star">*</span>Website:{" "}
                </label>
                <input name="website" id="website" value={editUser.website} onChange={(event)=>setEditUser({...editUser,website:event.target.value})} required />
              </div>
            </form>
          
        </section>
        <div className="modal-footer">
        <button
            type="submit"
            className="btn btn-cancel"
            onClick={() => onCancel("Cancel button was clicked")}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-submit"
            onClick={ saveEditData}
          >
            OK
          </button>
          
        </div>
      </div>
    </div>
  );
};

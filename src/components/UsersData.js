import React, { useState } from "react";
import userData from "../User.json";
import "../../src/components/Usersdata.css";
import { Modal } from "./Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LanguageIcon from '@mui/icons-material/Language';
import Email from "@mui/icons-material/Email";
const UsersData = () => {
  const [data, setData] = useState(userData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState();

  /**
   * function to delete a user
   * @param {*} id
   */
  const removeItem = (id) => {
    setData((previousState) =>
      previousState.filter((users) => users.id !== id)
    );
  };

  /**
   * function to like and unlike users
   */
  const likeUser = (id) => {
    let tempData = data.map((item) => {
      if (item.id === id) {
        item.like = !item.like;
      }
      return item;
    });
    setData(tempData);
  };

  const handleButtonClick = () => {
    setModalOpen(false);
  };

  const isModal = (id) => {
    setModalOpen(true);
    setEditData(data.filter((user) => user.id === id));
  };
  return (
    <div className="main">
      <div className="container">
        {data &&
          data.map((info) => {
            return (
              <>
                <section className="users-card" key={info.id}>
                  <div className="users-img">
                    <ul className="img-main">
                      <div className="circle">
                        <li className="img-circle"></li>
                      </div>
                      <li className="img-rect">
                        <div className="rect">
                        <h4>You are using an outdated API</h4>
                         <a href="#">Document</a>
                        </div>
                        
                      </li>
                    </ul>
                  </div>
                  <ul className="users-data">
                    <li><h2>{info.name}</h2></li>
                    <li className="users-icons"><Email/>{info.email}</li>
                    <li className="users-icons"><PhoneEnabledIcon/>{info.phone}</li>
                    <li className="users-icons"><LanguageIcon/>http://{info.website}</li>
                  </ul>

                  <ul className="user-action">
                    <li>
                      <span className="favourite" onClick={()=>likeUser(info.id)}>
                        {!info.like?<FavoriteBorderIcon style={{color:'red'}}/>:<FavoriteIcon style={{color:'red'}}/>}
                      </span>
                    </li>
                    <li>
                      <span
                        className="edit-icon"
                        onClick={() => isModal(info.id)}
                      >
                        <BorderColorIcon style={{color:'rgb(186, 184, 184)',background:''}}/>
                      </span>
                    </li>
                    <li>
                      <span
                        className="delete-icon"
                        onClick={() => removeItem(info.id)}
                      >
                        <DeleteIcon style={{color:'rgb(186, 184, 184)',background:''}}/>
                      </span>
                    </li>
                  </ul>
                </section>
              </>
            );
          })}
      </div>
      {modalOpen && (
        <Modal
          data={data}
          setData={setData}
          editData={editData}
          setEditData={editData}
          closeModal={handleButtonClick}
          onCancel={handleButtonClick}
        />
      )}
    </div>
  );
};

export default UsersData;

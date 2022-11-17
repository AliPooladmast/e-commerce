import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../redux/apiCalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { LinearProgressWithLabel } from "../linearProgress/LinearProgress";
import { Publish } from "@mui/icons-material";
import style from "./editUser.module.scss";
import AnonymousAvatar from "../../assests/icons/no-avatar.svg";
import { Alert, Snackbar } from "@mui/material";
const Joi = require("joi");
const storage = getStorage(app);

const schema = Joi.object({
  username: Joi.string().min(2).max(50).required(),
  email: Joi.string()
    .min(5)
    .max(255)
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
});

const EditUser = ({ user }) => {
  const dispatch = useDispatch();
  const [draftUser, setDraftUser] = useState(user);
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleInput = (e) => {
    setDraftUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    const fileName = new Date().getTime() + file?.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
          default:
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;

          case "storage/unknown":
            break;
          default:
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
        });
      }
    );
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const { username, email, ...others } = draftUser;
    const { error: joiError } = schema.validate({ username, email });

    if (joiError) {
      setErrorMessage(joiError.details?.[0]?.message);
      setShowSnackbar(true);
    } else {
      const editedUser = { username, email, ...others, img: image };
      editUser(dispatch, editedUser);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  return (
    <div className={style.EditUser}>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>

      <span className={style.Title}>Edit</span>
      <form className={style.Form}>
        <div className={style.Left}>
          <div className={style.Item}>
            <label>Username</label>
            <input
              name="username"
              type="text"
              placeholder={user.username}
              onChange={handleInput}
            />
          </div>
          <div className={style.Item}>
            <label>Full Name</label>
            <input type="text" placeholder={user.fullName || user.username} />
          </div>
          <div className={style.Item}>
            <label>Phone Number</label>
            <input
              type="text"
              placeholder={user.phoneNumber || "enter phone number"}
            />
          </div>
          <div className={style.Item}>
            <label>Email</label>
            <input
              name="email"
              type="text"
              placeholder={user.email}
              onChange={handleInput}
            />
          </div>
          <div className={style.Item}>
            <label>Address</label>
            <input type="text" placeholder={user.address || "enter address"} />
          </div>
        </div>
        <div className={style.Right}>
          <div className={style.Upload}>
            <div className={style.ImageContainer}>
              <img
                src={image || user.img || AnonymousAvatar}
                alt="edit profile"
              />
              {Boolean(progress) && progress !== 100 ? (
                <LinearProgressWithLabel value={progress} />
              ) : Boolean(progress) && progress === 100 ? (
                <div className={style.Uploaded}>File Uploaded</div>
              ) : null}
            </div>

            <label htmlFor="upload">
              <Publish />
            </label>
            <input
              type="file"
              id="upload"
              style={{ display: "none" }}
              onChange={handleImage}
            />
          </div>
          <button onClick={handleEdit}>Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;

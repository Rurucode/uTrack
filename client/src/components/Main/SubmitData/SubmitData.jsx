import React, {useState} from "react";
import { Link } from "react-router-dom";
import {storage, ref, uploadBytesResumable, getDownloadURL, listAll, deleteObject } from "../../../utils/fireStore"

import 'normalize.css';
import './SubmitData.css'

import TopNav from '../../Head/TopNav/TopNav'

import justMe from './assets/justme-image.png'
import shared from './assets/shared-img.png'
import folder from './assets/folder.png'
import topSubmit from './assets/fake-top.jpg'


const SubmitData = () => {

  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [project, setProject] = useState({})

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(e.target.file.value)

  }

  function handleChange(e) {
      setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();

    const storageRef = ref(storage, `/images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
   
    uploadTask.on("state_changed", () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFile(null);
        setURL(downloadURL);
        setProject({
          "name": e.target.name.value,
          "img": downloadURL,
          "type": e.target.type.value,
          "tags": e.target.tags.value
        })
        console.log(downloadURL)
      });
    });
  }
  console.log({url})
  console.log({project})

  return <div >
      <div className="submitData">
      <TopNav/>
      <img src={topSubmit} className="topSubmit"/>
      <form className="submitForm" onSubmit={handleUpload}>
          <label className="custom-file-upload">
            <input type="file" onChange={handleChange}/>
            +<br/>AÑADIR PROYECTO
          </label>
        <div className="nameAndType">
        <label className="name"> Nombre* </label>
          <label className="type"> Tipo </label>
        <input type='text' name='name'></input>
        <input type='text' name='type'></input>
        </div>
        <div id="ownerTitle" className="textStyle"> Titularidad del proyecto*</div>
        <div  className="proyectOwner">
        <label htmlFor="justMe">
          <input type="radio" name="justMe" value="justMe"/>
          <img src={justMe}></img>
        </label>
        <label htmlFor="shared">
          <input type="radio" name="shared" value="shared"/>
          <img src={shared}></img>
        </label>
        </div>
          <p className="textStyle">Ubicación</p>
          <div className="folderDirectory ">
            <div className="underline">
            <span><img src={folder}></img></span>
            <p>Nombre carpeta</p>
            </div>
          <button>+NUEVA</button>
          </div>
          <p className="textStyle">Añadir etiquetas</p>
          <div>
          <input type="text" placeholder="Tag nueva" className="tagInput" name="tags"></input>
          </div>
          <Link to="/uploadDone">
          <input type='submit' value="SUBIR" className="submitButton" disabled={!file}/>
          </Link>
        </form>
      </div>
  </div>;
};

export default SubmitData;

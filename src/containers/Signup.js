import React, { useState } from 'react';
import { storage } from '../helpers/firebase';
const CLOUDINARY_UPLOAD_PRESET = 'your_upload_preset_id';
const CLOUDINARY_UPLOAD_URL = 'cloudinary://946649153678361:tccn3g62hzcXLLZyjI_FvIEoftU@olukadenis-me';

const SignUp = () => {
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageUpload = (e) => {
    e.preventDefault();

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
      snapshot => {},
      error => {
        console.log(error);  
      },
      () => {
        storage
        .ref('images')
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          console.log(url);
          setImgUrl(url);
        })
        .catch(err => console.log('Download error: ', err))
      }
    )
  };

  console.log('Uplaoded: ', imgUrl);

  return (
    <div>
      <form onSubmit={handleImageUpload}>
        <input type="file" onChange={handleImageChange} />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default SignUp;

{/* <input name="file" type="file"
   class="file-upload" data-cloudinary-field="image_id"
   data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/> */}

//    <CloudinaryContext cloudName="olukadenis-me">
//     <Image publicId="sample" format="jpg">
//         <Transformation crop="fill" gravity="faces" width="300" height="200"/>
//     </Image>
// </CloudinaryContext>
import React, { useState } from 'react';
import request from 'superagent';
import {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '../helpers/AppConfig';

const SignUp = () => {
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState('');

  const handleImageChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageUpload = e => {
    e.preventDefault();

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', image);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        setImgUrl(response.body.secure_url);
      }
    });
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
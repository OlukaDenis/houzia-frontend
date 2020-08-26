import request from 'superagent';
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from '../../helpers/appConfig';
import { newImageUpload, fetchLoading, uploadError } from './actionCreators';

const newHouseImageUpload = image => (
  dispatch => {
    dispatch(fetchLoading());

    request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', image)
      .end((err, response) => {
        if (err) {
          dispatch(uploadError(err));
        }

        if (response.body.secure_url !== '') {
          dispatch(newImageUpload(response.body.secure_url));
        }
      });
  }
);

export {
  newHouseImageUpload,
}
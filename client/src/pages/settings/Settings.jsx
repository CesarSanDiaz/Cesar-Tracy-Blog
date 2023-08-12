import axios from 'axios';
import { useContext, useState } from 'react';
import CreateCategory from '../../components/categories/CreateCategory';
import { LoginSuccess } from '../../context/Actions';
import { Context } from '../../context/Context';
import './settings.css';

export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const PF = 'http://localhost:5000/images/';
  const [editButtonText, setEditButtonText] = useState('Edit Profile');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () => {
    if (isDisabled) {
      setIsDisabled(false);
      setEditButtonText('Cancel');
    } else if (!isDisabled) {
      setIsDisabled(true);
      setEditButtonText('Edit Profile');
      window.location.reload();
    }
    // isDisabled ? setIsDisabled(false) : setIsDisabled(true);
    // if (editButtonText) {
    //   setEditButtonText('Edit Profile');
    // }
    // const cancel = 'Cancel';
    // setEditButtonText(cancel);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err.message);
      }
    }
    try {
      const res = await axios.put('/users/' + user._id, updatedUser);
      setSuccess(true);
      dispatch(LoginSuccess(res.data));
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsTitleUpdate'>Account</span>
          {/* <span className='settingsTitleDelete'>Delete Account</span> */}
        </div>
        <button className='settingsEditButton' onClick={handleClick}>
          {editButtonText}
        </button>
        <form className='settingsForm' onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt='pic'
            />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input
              id='fileInput'
              type='file'
              style={{ display: 'none' }}
              className='settingsPPInput'
              onChange={(e) => setFile(e.target.files[0])}
              disabled={isDisabled}
            />
          </div>
          <label>Username</label>
          <input
            autoFocus
            type='text'
            placeholder={user.username}
            name='name'
            onChange={(e) => setUsername(e.target.value)}
            disabled={isDisabled}
          />
          <label>Email</label>
          <input
            type='email'
            placeholder={user.email}
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            disabled={isDisabled}
          />
          <label>Password</label>
          <input
            type='password'
            placeholder='*********'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            disabled={isDisabled}
          />
          <button className='settingsSubmitButton' type='submit'>
            Update
          </button>
          {success && (
            <span
              style={{ color: 'green', textAlign: 'center', margin: '10px' }}
            >
              Profile has been updated
            </span>
          )}
        </form>
      </div>
      <CreateCategory />
    </div>
  );
}

import { useState, useEffect } from 'react';
import Axios from 'axios';
import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import defaultAvatar from '../../assets/default-avatar.jpeg';

export default function WidgetSm() {

  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await Axios.get('http://localhost:5004/api/users?new=true', {
          headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjQ0NDI0YTUxZTRhNWExMmJlYTNmZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjcxNTQ1MCwiZXhwIjoxNjI3MTQ3NDUwfQ.4uvl4tomVSh1RT97mK407wQI59FmxuXt2_H-dIY67xw'
          }
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {
          newUsers.map((user) => (
            <li className='widgetSmListItem'>
              <img
                src={ user.profilePic || defaultAvatar }
                alt=''
                className='widgetSmImg'
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

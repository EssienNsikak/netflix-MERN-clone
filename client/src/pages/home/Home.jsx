import { useState, useEffect } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import Axios from 'axios';
import './home.scss';

const Home = ({ type }) => {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await Axios.get(
          `http://localhost:5004/api/lists${type ? '?type=' + type : ''} ${genre ? '&genre=' + genre : ''}`, {
          headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjQ0NDI0YTUxZTRhNWExMmJlYTNmZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjcxNTQ1MCwiZXhwIjoxNjI3MTQ3NDUwfQ.4uvl4tomVSh1RT97mK407wQI59FmxuXt2_H-dIY67xw'
          }
        }
        );
        setLists(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists()
  }, [type, genre]);

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      {
        lists.map((list) => (
          <List list={list} />
        ))
      }
    </div>
  )
};

export default Home;

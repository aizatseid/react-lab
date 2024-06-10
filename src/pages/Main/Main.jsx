import { useEffect, useState } from 'react';
import './Main.scss';
import axios from 'axios';

export const Main = () => {

    const [photos, setPhotos] = useState([]);

  const getData = async () => {
    const resp = await axios ("https://jsonplaceholder.typicode.com/photos");
    console.log(resp.data);
    setPhotos(resp.data)
  }

    useEffect(() => {
      getData();
    }, []);

  

  return (
    <div className="container">
      <div className="grid">
        {photos.map((el) => (
          <div className="card" key={el.id}>
            <h4 className="card__title">{el.title}</h4>
            <div className="card__image">
              <img src={el.thumbnailUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


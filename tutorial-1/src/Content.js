import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [albums, setAlbums] = useState([
    {
      id: 1,
      albumName: "Tragic Kingdom"
    },
    {
      id: 2,
      albumName: "Why Do They Rock So Hard?"
    },
    {
      id: 3,
      albumName: "Supernatural"
    }
  ]);

  const handleAlbumRewrite = (id) => {
    const newAlbum = albums.map((album) => album.id === id ? {...album, albumName: "Cuando Los Ángeles Lloran"} : album);
    setAlbums(newAlbum);
  }

  return (
    <main>
      <ul>
        {albums.map((album) => (
          <li className="album" key={album.id}>
            <p>
              {album.albumName} &nbsp;
              <span>
                <FaTrashAlt
                  role="button"
                  tabIndex="0"
                />
              </span>
            </p>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAlbumRewrite(1)}>Rewrite Album</button>
    </main>
  )
}

export default Content;

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {

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

  const handleRewrite = (id) => {
    const newAlbumList = albums.map((album) => album.id === id ? {...album, 
      albumName: "Cuando Los Ángeles Lloran"} : album);
    setAlbums(newAlbumList);
  }

  const handleDelete = (id) => {
    const newAlbumList = albums.filter((album) => album.id !== id);
    setAlbums(newAlbumList);
  }

  return (
    <div className="App">
      <Header title="Albums"/>
      <Content 
        albums={albums}
        handleRewrite={handleRewrite}
        handleDelete={handleDelete}
      />
      <Footer length={albums.length}/>
    </div>
  );
}

export default App;

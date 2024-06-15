import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  /*
  * This is JSX. JSX stands for JavaScript XML. It allows to write
  * HTML in REACT. Code in between brackets is rendered as JavaScript.
  * The tags between the div tags are known as functional components.
  * */
  /*
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
    const newAlbumList = albums.map((album) => album.id === id ? {...album, 
      albumName: "Cuando Los Ángeles Lloran"} : album);
    setAlbums(newAlbumList);
  }

  const handleDeleteAlbum = (id) => {
    const newAlbumList = albums.filter((album) => album.id !== id);
    setAlbums(newAlbumList);
  }
  */

  return (
    <div className="App">
      <Header 
        title="Albums"
      />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

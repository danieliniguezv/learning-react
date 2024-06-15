import ItemList from './ItemList';

const Content = ({ albums, handleDelete }) => {
  return (
    <main>
      {albums.length ? (
        <ItemList 
          albums={albums}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty!</p>
      )}
    </main>
  )
}

export default Content;

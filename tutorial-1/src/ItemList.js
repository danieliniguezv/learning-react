import LineItem from './LineItem';

const ItemList = ({ albums, handleDelete }) => {
  return (
    <ul>
      {albums.map((album) => (
        <LineItem 
          key={album.id}
          album={album}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default ItemList;

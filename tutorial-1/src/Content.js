import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ albums, handleRewrite, handleDelete }) => {
  return (
    <main>
      {albums.length ? (
        <>
          <ul>
            {albums.map((album) => (
              <li className="album" key={album.id}>
                <p>
                  {album.albumName} &nbsp;
                  <span>
                    <FaTrashAlt
                      role="button"
                      onClick={() => handleDelete(album.id)}
                      tabIndex="0"
                    />
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <button onClick={() => handleRewrite(1)}>Rewrite Album</button>
        </>
      ) : (
        <p>Your list is empty!</p>
      )}
    </main>
  )
}

export default Content;

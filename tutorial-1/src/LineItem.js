import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ album, handleDelete }) => {
  return (
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
  )
}

export default LineItem;

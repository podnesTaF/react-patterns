import PropTypes from 'prop-types'; 
import { useDataSource } from '../hooks/data-source';
import axios from 'axios';

export const UserInfo = ({userId}) => {
  const user = useDataSource(async () => {
    const {data} = await axios.get('http://localhost:9090/users/' + userId)
    return data
  })
  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

UserInfo.propTypes = {
  user: PropTypes.object
}

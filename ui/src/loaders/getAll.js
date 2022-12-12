import axios from 'axios';

const getAll = async () => {
  try {
    return await axios.get('http://localhost:8081/guest');
  } catch (error) {
    return ([]);
  }
};

export default getAll;
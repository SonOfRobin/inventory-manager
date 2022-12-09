import axios from 'axios';

const loginAction = async ({ request }) => {
  const { username, password } = Object.fromEntries(await request?.formData());
  console.log(`'From the route action: ' ${username}, ${password}`);

  const token = await axios.post(('http://localhost:8081/login'),
    {
      username: username,
      password: password,
    }
  );
  console.log('login action: ', token);
  if (token.data) {
    sessionStorage.setItem('user', JSON.stringify({ auth: token.data, user: username, }));
    return {
      auth: token.data,
      user: username,
    };
  }
  return null;
};

export default loginAction;
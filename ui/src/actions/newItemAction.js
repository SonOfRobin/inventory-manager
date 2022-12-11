import axios from 'axios';
import { redirect } from 'react-router-dom';

const newItemAction = async ({ request }) => {
  const { product, description, quantity, uid } = Object.fromEntries(await request?.formData());
  console.log(`'From the route action: ' ${product}, ${description}`);

  const res = await axios.post(('http://localhost:8081/user/create-item'),
    {
      user: uid,
      product: product,
      description: description,
      quantity: quantity,
    }
  );
  console.log('New Item Action: ', res);
  return redirect('/main');
};

export default newItemAction;
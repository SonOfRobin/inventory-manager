import axios from 'axios';
import { redirect } from 'react-router-dom';

const newItemAction = async ({ request }) => {
  console.log(request);

  if (request.method === 'POST') {
    const { product, description, quantity, uid } = Object.fromEntries(await request?.formData());
    console.log(`'From the route action: ' ${product}, ${description}`);
    const res = await axios.post(('http://localhost:8081/user/create-item'),
      {
        user: uid,
        item_name: product,
        description: description,
        quantity: quantity,
      }
    );
    console.log('New Item Action: ', res);
    return redirect('/main');
  }
  else if (request.method === 'PUT') {
    const { id, item_name, description, quantity } = Object.fromEntries(await request?.formData());
    const res = await axios.put(('http://localhost:8081/user/update-item'),
      {
        id: id,
        item_name: item_name,
        description: description,
        quantity: quantity,
      }
    );
    console.log('New Item Action: ', res);
    return null;
  }
  else if (request.method === 'DELETE') {
    const { id } = Object.fromEntries(await request?.formData());
    console.log('Delete method: ', id);
    const res = await axios.delete(`http://localhost:8081/user/delete-item/${id}`);
    console.log('New Item Action: ', res);
    return null;
  }
};

export default newItemAction;
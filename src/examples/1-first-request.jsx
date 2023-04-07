import { useEffect, useState } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      // const response = await axios.get(url);
      // data = response.data;
      const { data } = await axios.get(url);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h2 className='text-center'>first request</h2>
      <section className='products'>
        {products.map((product) => {
          const { id, image, name, price } = product;
          return (
            <article key={id} className='product'>
              <img src={image} alt={name} />
              <h4>{name}</h4>
              <p>${price}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
};
export default FirstRequest;

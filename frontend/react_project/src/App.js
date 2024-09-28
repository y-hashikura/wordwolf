import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // APIのURLを環境変数から取得する
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000/products/';

    // DjangoのAPIからデータを取得
    axios.get(apiUrl)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);  // ローディング状態を終了
      })
      .catch((error) => {
        setError('Error fetching data: ' + error.message);
        setLoading(false);  // ローディング状態を終了
      });
  }, []);

  // ローディング中の表示
  if (loading) {
    return <div>Loading...</div>;
  }

  // エラー発生時の表示
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
import React from 'react';
import './App.css';

import { Posts } from '@/types';

function App() {
  const [data, setData] = React.useState<Posts[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8080/posts');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <>
      {data?.map((post) => (
        <React.Fragment key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </React.Fragment>
      ))}
    </>
  );
}

export default App;


import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {

  const [fetchData, setFetchdata] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {

    setLoading(true);

    fetch("https://dummyjson.com/products")
    .then(response =>{
      return response.json()
    })
      .then(resp => {
        setFetchdata(resp);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>An error occured:{error.message}</div>;
  }
  if (!fetchData) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <h1>Fetch Data from API</h1>
      <pre>{JSON.stringify(fetchData, null, 2)}</pre>
    </div>
  );
};

export default App;

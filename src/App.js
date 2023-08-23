import React, { useState, useEffect } from'react'; //useEffect allows us to run code only once, useState allows us to run code multiple times
import './App.css';

function App() {
  // data is the variable that contains info we get from the backend and setItem allows manipulation of the variable
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch('/get_data')
    .then(res => res.json())
    .then(data => {
      setdata(data)
      console.log(data) //make sure we got the data from the backend
    })
    .catch(err => console.log("there is an error: ", err));
  }, []);

  return (
    <div className="App">
      <h1>Photo storage</h1> {//set a title for the page
      }
      {data.list && Array.isArray(data.list) ? (
                data.list.map((image, i) => (
                    <img key={i} src={`/stored_photos/${image}`} alt={image} style={{width: '300px', height: '200px'}}/>
                ))
            ) : (
                <p>Loading...</p>
            )}
    </div>
  );
}

export default App;

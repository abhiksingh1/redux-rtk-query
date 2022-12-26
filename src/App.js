import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { useGetUsersQuery } from './services/users';

const App = () => {

    const {data, isLoading, error} = useGetUsersQuery();



    return (
      <div className="App">
        <h1>Hello World!</h1>
        <br></br>
        {
          error ? (
            <h2>Error, something went wrong!...</h2>
          ) : isLoading ? (
            <h2>Loading!...</h2>
          ) : (data.map((user, i) =>
          <div key={i}>
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
            <h5>{user.website}</h5>
            <hr />
          </div>
        ))
        }
      </div>
    );

}

export default App;

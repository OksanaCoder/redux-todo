import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import  PostForm  from "./components/PostForm";
import  Posts  from "./components/Posts";
import store from './store.js'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Posts />
      <PostForm />
    </div>
    </Provider>
  );
}

export default App;

import './App.css';
import {useState, useEffect} from 'react';
import Header from './Header';
import Storys from './Storys';
import Postar from './Postar';
import Post from './Post';
import firebase from 'firebase';
import {db, auth, storage} from './firebase.js';

function App() {
  const [posts, setPosts] = useState([]);
  const db = firebase.firestore();
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(function(doc){
        return {id: doc.id,info:doc.data()}
      }))
    })
  },[]);
  return (
    <div className="App">
      <Header />
      <Storys />
      <Postar />
      {
        posts.map((val)=>{
          return(
            <Post nome={val.info.nome} conteudo={val.info.conteudo} data={val.info.data} id={val.id}/>
          );
        })
      }
    </div>
  );
}

export default App;

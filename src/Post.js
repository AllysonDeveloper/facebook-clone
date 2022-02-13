import perfil from './resource/perfil.jpg';
import imgPost from './resource/imgPost.jpg'
import ComentSingle from './ComentSingle';
import {useState, useEffect} from 'react';
import { FaCross } from "react-icons/fa";
import firebase from 'firebase';
export default function(props){
  const [coments, setComents] = useState([]);
  const db = firebase.firestore();
  db.collection('posts').doc(props.id).collection('coments').onSnapshot((snapshot)=>{
    setComents(snapshot.docs.map((doc)=>{
      return{info:doc.data()}
    }))
  })
    return(
        <div className='container'>
        <div className='postSingle shadow'>
          <div className='postHeader'>
            <div className='infoProfile'>
              <div className='imgProf' style={{backgroundImage: `url(${perfil})`}}></div>
              <div className='nameAndDate'>
                <span>{props.nome}</span>
                <div className='Data'>
                  <span>{props.data} . </span>
                  <FaCross/>
                </div>
              </div>
            </div>
            <div className='dots'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
          </div>
          <p>{props.conteudo}</p>
          <div className='imgPost' style={{backgroundImage: `url(${imgPost})`}}></div>
          <div className='comentsContainer'>
            <div className='coments'>
              {
                coments.map((val)=>{
                  return(
                    <ComentSingle nome={val.info.nome} conteudo={val.info.conteudo} data={val.info.data}/>
                  );
                })
              }              
              <div className='comentar flex'>
                <div className='imgProf' style={{backgroundImage: `url(${perfil})`}}></div>
                <input type='text' placeholder="Escreva um comentário"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
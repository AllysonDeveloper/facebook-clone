import bg from './resource/bg.jpg'
import perfil from './resource/perfil.jpg'
export default function(){
    return(
        <div className='limit shadow'> 
          <div className='storiesCard' style={{backgroundImage: `url(${bg})`}}>
            <div className="overlay">
              <div className='imgProf' style={{backgroundImage: `url(${perfil})`}}></div>
              <p>Allyson</p>
            </div>
          </div>        
        </div>
    );
}
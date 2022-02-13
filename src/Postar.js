import perfil from './resource/perfil.jpg';
import { GoSmiley, GoFileMedia,  GoEye} from "react-icons/go";
export default function(){
    return(
        <div className='container'>
      <div className='postar flex shadow'>
        <div className='pensamento flex'>
          <div className='imgProf' style={{backgroundImage: `url(${perfil})`}}></div>
          <input type='text' placeholder="No que você está pensando Allyson?"/>
        </div>
        <div className='icones flex'>
          <div className='icone-single flex'>
            <GoEye/><span>Vídeo ao vivo</span>
          </div>
          <div className='icone-single flex'>
            <GoFileMedia/><span>Foto/Vídeo</span>
          </div>
          <div className='icone-single flex'>
            <GoSmiley/><span>Sentimento/atividade</span>
          </div>
        </div>
      </div>
      </div>
    );
}
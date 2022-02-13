import perfil from './resource/perfil.jpg';
export default function(props){
    return(
        <div className='comentSingle'>
            <div className='imgProf' style={{backgroundImage: `url(${perfil})`}}></div>
            <div className='coment'>
                <div className='comentContent'>
                    <span>{props.nome}</span>
                    <p>{props.conteudo}</p>
                </div>
                <span>{props.data}</span>
            </div>
         </div>
    );
}
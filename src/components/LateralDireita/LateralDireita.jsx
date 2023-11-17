import './LateralDireita.css'
import './Usuario'
import './Sugestoes'
import Usuario from './Usuario'
import icon from '../../assets/eu-instagram.png'
import icon2 from '../../assets/messi.png'
import icon3 from '../../assets/xxxtentacion.png'
import icon4 from '../../assets/nick.png'
import icon5 from '../../assets/maggie.png'
import Sugestoes from './Sugestoes'

export default function LateralDireita(){
    return(
        <div className='LateralDireita'>
            <Usuario 
            imgPerfil={icon}
            nome='alexmsilva17_'
            nick='alexsander'
            />
            <div className='midAside'>
                <span className='midAsideChild1'>Sugestões para você</span>
                <div className="separador"></div>
                <span className='midAsideChild2'>Ver tudo</span>
            </div>
            <Sugestoes 
            imgSugest={icon2}
            nomeSugest="leomessi"
            seguido='Segue você'
            />
            <Sugestoes 
            imgSugest={icon3}
            nomeSugest="xxxtentacion"
            seguido='Segue você'
            />
            <Sugestoes 
            imgSugest={icon4}
            nomeSugest="nick"
            seguido='Segue você'
            />
            <Sugestoes 
            imgSugest={icon5}
            nomeSugest="maggie"
            seguido='Segue você'
            />
            <div className="direitos">
                <span><p>Sobre - Ajuda - Imprensa - API - Carreiras - Privacidade - Termos - Localizações - Idioma - Meta verified (fictício)</p></span>
                <span><p>&copy; 2023 INSTAGRAM FROM Alexsander M Silva</p></span>
            </div>
        </div>
    )
}
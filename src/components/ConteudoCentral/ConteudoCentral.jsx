import './ConteudoCentral.css'
import Itemstories from './Stories/ItemStories'
import Post from './Post/Post'
import iconStory2 from '../../assets/icon-story2.png'
import iconStory3 from '../../assets/icon-story3.png'
import iconStory4 from '../../assets/icon-story4.png'
import iconStory5 from '../../assets/icon-story5.png'
import iconStory6 from '../../assets/icon-story6.png'
import iconStory7 from '../../assets/icon-codie.png'
import iconStory8 from '../../assets/icon-story8.png'
import iconStory9 from '../../assets/icon-story9.png'
import post1 from '../../assets/post1-instagram.png'
import post2 from '../../assets/post-messi.png'
import post3 from '../../assets/post-code.png'
import post4 from '../../assets/post-brcode.png'
import iconpost2 from '../../assets/messi.png'
import iconpost3 from '../../assets/icon-code.png'
import iconpost4 from '../../assets/icon-code.png'

export default function ConteudoCentral(){
    return(
      <div className='ConteudoCentral'>
        <div className="Stories">
          <Itemstories nameText="camz.alv..." icon={iconStory2}/>
          <Itemstories nameText="progra..." icon={iconStory3}/>
          <Itemstories nameText="evandro_..." icon={iconStory4}/>
          <Itemstories nameText="gab.au..." icon={iconStory5}/>
          <Itemstories nameText="leo.sard..." icon={iconStory6}/>
          <Itemstories nameText="thg_carlos" icon={iconStory7}/>
          <Itemstories nameText="hernando..." icon={iconStory8}/>
          <Itemstories nameText="saopaulofc" icon={iconStory9}/>
        </div>
        <div className="Timeline">
          <Post 
          icon={iconStory3}
          nameUser="Programador.fullstackmaster"
          time="9 h"
          post={post1}
          miniIcon={iconStory2}
          NameLike='camz.alvess'
          NamePerfil='programador.fullstackmaster'
          Descricao='Siga nossa página para curtir com mais memes de programadores😁... E se você quer ter uma carreira de sucesso com a programação, não perca o pacote Full-Stack Master! Link na bio.💻😎'
          quantComent='55'
          NamePerfilComent='_matheuslopez'
          coment='KKSKKSKSKSKS, Como que tanka?<3'
          NamePerfilComent2='camz.alvess'
          coment2='Meme bom kkk, Enquanto ao curso eu não preciso, já sou dev geniar😎!'
          />
          {/* <<<<<<=========>>>>>>> */}
          <Post 
          icon={iconpost2}
          nameUser="leomessi"
          time="2d"
          post={post2}
          miniIcon={iconStory3}
          NameLike='evandro_ ...'
          NamePerfil='leomessi'
          Descricao='Sempre soube ser o Millior  😌'
          quantComent='30.234'
          NamePerfilComent='cr7'
          coment=' 😭😭'
          NamePerfilComent2='evandro_ ...'
          coment2='O millior👽'
          />
          {/* <<<<<<<<==========>>>>>>>> */}
          <Post 
          icon={iconpost3}
          nameUser="codes.learning"
          time="2 d"
          post={post3}
          miniIcon={iconStory7}
          NameLike='codie.py'
          NamePerfil='codes.learning'
          Descricao='😱Ultimate Programmer Bundle ...'
          quantComent='23'
          NamePerfilComent='codie.py'
          coment='HTMl be like. Ab aisa b example na do humara😂😂'
          NamePerfilComent2='thg_carlos'
          coment2='futuro dev'
          />
          <Post 
          icon={iconpost4}
          nameUser="brasilcode_"
          time="4 d"
          post={post4}
          miniIcon={iconStory2}
          NameLike='camz.alves'
          NamePerfil='brasilcode_'
          Descricao='Se você pudesse ganhar superpoderes na programação tomando uma dessas pílulas, qual você tomaria?  '
          quantComent='27'
          NamePerfilComent='matheus.lopes'
          coment='verde ctz'
          NamePerfilComent2='leo.sard ...'
          coment2='Azull para todos meus códiguim funcionarem sem eu revisar.'
          />
        </div>
      </div>
    )
}
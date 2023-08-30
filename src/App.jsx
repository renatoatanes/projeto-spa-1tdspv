import reactLogo from "./assets/react.svg";
import Cabecalho from "./components/Cabecalho";
import Conteudo  from "./components/Conteudo";

export default function App() {

  //area declarativa 
    
  let reactLogoTextoAlt = "Logo do react"

  return (

  <>
    {/* Area imperativa! */}

    <div>
      {/* um cabecalho com um header, com h1, uma lista ul com 3 itens com 3 links. */}

         <Cabecalho/>

        {/* uma secao com uma div , com 3 paragrafos , com 3 linhas de lorem, uma imagem. */}
        
        <Conteudo reactLogoProps={reactLogo} reactLogoTextoAltProps={reactLogoTextoAlt} />

      {/* um rodape com uma div , uma lista ul com 3 links para redes sociais. */}
      <footer>
        <div>
          <ul>
            <li><a href="">Github</a></li>
            <li><a href="">X</a></li>
            <li><a href="">Reddit</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </>
    
  )
}

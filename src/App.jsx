import reactLogo from "./assets/react.svg";
import Cabecalho from "./components/Cabecalho";

export default function App() {

  //area declarativa 
    
  let reactLogoTextoalt = "Logo do react"

  return (

  <>
    {/* Area imperativa! */}

    <div>
      {/* um cabecalho com um header, com h1, uma lista ul com 3 itens com 3 links. */}
         <Cabecalho/>

        {/* uma secao com uma div , com 3 paragrafos , com 3 linhas de lorem, uma imagem. */}
        <section>
          <div>
            <p><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto, nisi velit, temporibus voluptas at, doloribus vel veniam explicabo delectus sapiente quo autem harum quae tempora dicta quis neque corporis?</span><span>Sed unde, aut repellat eum eos provident facere quod expedita ex, consequatur ullam, enim repellendus amet non dignissimos illum necessitatibus. Corporis eligendi iste labore, rem fugiat porro ad aliquid alias.</span><span>Dolor ducimus, natus sint deserunt voluptates earum quos? Esse ipsa facilis excepturi aliquid distinctio, inventore aliquam ea magnam officia blanditiis qui ducimus quo laudantium provident? Mollitia quas nostrum eum expedita?</span></p>
            <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sit ratione esse modi quaerat dolorum aliquam magni ad id ipsam, eveniet autem quam commodi molestias deserunt nostrum dolorem vero sunt?</span><span>Nostrum asperiores quo possimus. Placeat ducimus minima esse porro maiores, nobis sint non voluptatibus quibusdam odio itaque temporibus necessitatibus eius at a culpa nostrum dolorem. Odit cupiditate non eius eos?</span><span>Et, suscipit! Id reprehenderit at saepe explicabo! Quo nam ratione illum earum, odio libero impedit vitae aut cumque porro, dignissimos corrupti! Natus sed necessitatibus, similique ipsum eum sit porro beatae!</span></p>
            <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptate labore voluptas, tempora mollitia recusandae cumque, repellat maiores ipsa laborum saepe dolores reiciendis eveniet fugiat esse sint tenetur nesciunt ea!</span><span>Voluptates voluptatem laborum fugit ex totam consequuntur impedit natus magni? Nam aperiam sequi odit expedita soluta error suscipit, explicabo labore sunt cumque ipsam itaque. A dolorem eos hic eligendi quidem.</span><span>Rem vitae non cupiditate ipsa sapiente delectus odit pariatur ipsam quo qui. Molestias dignissimos labore animi nesciunt, illum, sint possimus delectus, commodi expedita explicabo quod beatae quidem tenetur eos aliquam.</span></p>
            <img src={reactLogo} alt="{reactLogoTextoalt}" />
          </div>
        </section>

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

import { ListaProdutos } from "./ListaProdutos";
export default function Produtos()

    DocumentTimeline.title = "Lista de Produtos"; 

    return(
        <div>
            <h1>Lista de Produtos</h1>
          
          <div>
             <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                </tr>
                </thead>
              <tbody>
                 {ListaProdutos.map((produto ,index) => (
                <tr/>
                   <td>{produto.id}</td>
                   <td>{produto.id}</td>
                   <td>{produto.id}</td>
                   
                </tr>

                     
                 ))};
                   
              </tbody> 
              <tfoot>
                <tr>
                    <td colSapn="4">TOTAL DE PRODUTOS: {ListaProdutos.length}</td>
                </tr>
                </tfoot> 
             </table>
            </div> 

        </div>
    )

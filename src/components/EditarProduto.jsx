import { ListaProdutos } from "./ListaProdutos";

export default function EditarProdutos(){

  
    //Utilizando o hook paramns() para recuperar o id passado no path 

    document.title = "EDITAR PRODUTOS" + Id;
     
    const ProdutoRetornaFltro = ListaProdutos.filter(produto => produto.id == id); 

    return(
        <main>
            <h1>Editando a produto</h1>
        </main>
    )
}
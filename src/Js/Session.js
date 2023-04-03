/**
 * TO-DO
 * -Trabalhar sempre com objetos
 * -Criar funções que settem valores p/ a sessão
 * -Criar funções que recebam valores da sessão, em objeto
 * -Apenas criar um atributo de sessão SE ELE NÃO EXISTE
*/

let SESSION_ATTRIBUTE = {
    CARRINHO: "carrinho",
}

let carrinhoDeCompras = {
    produtos: [
        {id:1, name: "sus", volume:"1337"},
        {id:2, name: "impostor", volume:"100"}
    ]
};

//Setting Product as json object
sessionStorage.setItem(SESSION_ATTRIBUTE.CARRINHO, JSON.stringify(carrinhoDeCompras))

//Retrieving object to be used later
let myObj = JSON.parse(sessionStorage.getItem(SESSION_ATTRIBUTE.CARRINHO));


/**
 * @todo Criar função
 * @param {Number} id id da bebida
 */
export function addProdutoCarrinho(id){
}
//aula guiada A018 - Callbacks e Funções de Array

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
​
const multiplicaPorTres = (arrayDeNumeros) => {
  const arrayMultiplicado = [];
​
  for (let numero of arrayDeNumeros) {
    arrayMultiplicado.push(numero * 3)
  }
​
  return arrayMultiplicado
}
​
// console.log('TRIPLO', multiplicaPorTres(listaDeNumeros))
​
const retornaPares = (arrayDeNumeros) => {
  const arrayPares = []
​
  for (let numero of arrayDeNumeros) {
    if (numero % 2 === 0) {
      arrayPares.push(numero)
    }
  }
​
  return arrayPares
}
​
// console.log('PARES', retornaPares(listaDeNumeros))
​
const imprimeNumeros = (arrayDeNumeros, callback) => {
  const response = callback(arrayDeNumeros)
​
  console.log('Imprime números / com callback', response)
}
​
// imprimeNumeros(listaDeNumeros, multiplicaPorTres)
// imprimeNumeros(listaDeNumeros, retornaPares)
​
// MAP
const multiplicaPorTresComMap = listaDeNumeros.map((numero, indice, array) => {
  return numero * 3
})
​
// console.log('MAP', multiplicaPorTresComMap)
​
// FILTER
const retornaParesComFilter = listaDeNumeros.filter((numero, indice, array) => { // indice e array não são usados nesse exemplo, mas podem ser úteis em outras situações
  return numero % 2 === 0
})
​
// console.log('FILTER', retornaParesComFilter)


//exercicio
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]
​
//Parte A
const aumentaVida = (poke) => {
  // return {
  //   nome: poke.nome,
  //   tipo: poke.tipo,
  //   vida: 100
  // }
​
  return { ...poke, vida: 100 }
}
​
const pikachu = {
  nome: 'Pikachu',
  tipo: 'elétrico',
  vida: 35
}
​
console.log(pikachu)
​
console.log('Aumentando a vida do Pikachu:', aumentaVida(pikachu))
​
// Parte B 
const pokemonsVidaCheia = pokemons.map(aumentaVida)
console.log('Pokémons Vida Cheia', pokemonsVidaCheia)
​
// Parte C
const pokemonsDeFogo = pokemons.filter((poke) => {
  return poke.tipo === 'fogo'
})
​
console.log('FOGO', pokemonsDeFogo)
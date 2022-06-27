var frases = [
  '‘Compreendi que o Amor englobava todas as vocações, que o Amor era tudo…’',
  '‘Não é bastante amar, é preciso prová-lo!’',
  '‘Como estou longe de ser conduzida pela via do temor, sei sempre encontrar o meio de ser feliz e aproveitar de minhas misérias’.',
  ' ‘O Senhor é tão bom para comigo, que me é impossível temê-lo’.',
  '‘Ó meu Deus, Trindade Bem-aventurada! Eu vos desejo amar e vos fazer amada…’',
  '‘O Pai quer que o ame, porque Ele me perdoou não muito, mas tudo’.',
  '‘Sim, tudo está bem, quando só se busca a vontade de Jesus.’',
  'Enfim, pus mão à obra e tinha tanta boa vontade que consegui perfeitamente’.',
  '‘Que felicidade poder dizer: ‘Estou seguro de fazer a vontade do Bom Deus’.',
  '‘E minha vida é um único ato de amor!’',
  '‘O Bom Deus me dá coragem na proporção dos meus sofrimentos’.',
  '‘Faz-nos tanto bem, quando sofremos, ter corações amigos, cujo eco responde a nossa dor’.'
]
var inputEntrada = document.querySelector('#sorteia')
var btnsorteia = document.querySelector('#btnsorteia')
function sorteiafrase() {
  const random = Math.floor(Math.random() * frases.length)
  const frasesorteada = frases[random]
  inputEntrada.value = frasesorteada
}
btnsorteia.onclick = sorteiafrase

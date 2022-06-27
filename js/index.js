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
  '‘Faz-nos tanto bem, quando sofremos, ter corações amigos, cujo eco responde a nossa dor’.',
  '‘Sim, tudo está bem, quando só se busca a vontade de Jesus.',
  ' ‘Já que a verdade brilha aos seus olhos, não fuja da sua luz’.',
  ' ‘O Bom Deus me mostra a verdade, sinto muito bem que tudo vem dele.’',
  '‘A vida é apenas um sonho, em breve nos acordaremos.’',
  ' ‘Só tenho de olhar o santo Evangelho, logo respiro os perfumes da vida de Jesus e sei para que lado correr’.',
  '‘Só temos o curto instante da vida para dá-lo ao Bom Deus…’',
  ' ‘É preciso que o Espírito Santo seja a vida de teu coração’.',
  '‘Ó Jesus, meu Amor… minha vocação, enfim, eu a encontrei, minha vocação é o Amor!’',
  ' ‘Enfim, pus mão à obra e tinha tanta boa vontade que consegui perfeitamente’.',
  'Que felicidade poder dizer: ‘Estou seguro de fazer a vontade do Bom Deus’.',
  ' ‘Eu não lamento a vida, oh, não!’',
  ' ‘E minha vida é um único ato de amor!’',
  '‘O Bom Deus me dá coragem na proporção dos meus sofrimentos’.',
  'Faz-nos tanto bem, quando sofremos, ter corações amigos, cujo eco responde a nossa dor’.',
  '‘A caridade é o caminho excelente, que conduz seguramente a Deus’',
  '‘Sou de tal natureza que o temor me faz recuar; com o amor não somente avanço, mas vôo…’',
  '‘É muito doce a gente se sentir fraco e pequeno!”',
  ' ‘É preciso abandonar o futuro nas mãos do Bom Deus…’‘Nada acontece que Deus não tenha previsto desde toda a eternidade…’',
  '‘Não me inquieto, absolutamente, com o futuro…’',
  'Por uma graça fielmente recebida, Ele me concedia uma multidão de outras’.',
  '‘Jesus não quer que eu reclame o que me pertence; isso deveria parecer-me fácil e natural pois nada me pertence’.',
  ' ‘Instruindo os outros muito aprendi.’',
  '‘Deus não poderia me inspirar desejos irrealizáveis, portanto, posso, apesar da minha pequenez, aspirar à santidade’.',
  '‘Não consigo crescer, devo suportar-me como sou, com todas as minhas imperfeições’.',
  'Parece-me que agora nada me impede de levantar voo, pois não tenho mais grandes desejos a não ser o de amar até morrer de amor’.',
  '‘Os mais belos pensamentos nada são sem as obras.’',
  '‘Para mim a oração é um impulso do coração, um simples olhar para o Céu, um grito de gratidão e amor no meio da provação como no meio da alegria’.',
  'Minhas mortificações consistiam em refrear minha vontade, sempre prestes a se impor’…',
  '‘Ele quem me instruiu dessa ciência que esconde dos sábios e dos pedantes e revela aos menores…’',
  ' ‘Ao dar-se a Deus, o coração não perde sua natural ternura, pelo contrário, essa ternura cresce ao tornar-se mais pura e mais divina’.'
]
var inputEntrada = document.querySelector('#sorteia')
var btnsorteia = document.querySelector('#btnsorteia')
function sorteiafrase() {
  const random = Math.floor(Math.random() * frases.length)
  const frasesorteada = frases[random]
  inputEntrada.value = frasesorteada
}
btnsorteia.onclick = sorteiafrase

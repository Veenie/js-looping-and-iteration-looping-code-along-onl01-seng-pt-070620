// Code your solutions in this file


function writeCards(peeps, event) {
  let cards = []
  for (let i =0; i < peeps.length; i++)
  {cards.push(`Thank you, ${peeps[i]}, for the wonderful ${event} gift!`);}
  return cards
  
}
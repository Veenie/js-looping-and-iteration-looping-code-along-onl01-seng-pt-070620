// Code your solutions in this file
const peeps = ["Lisa", "Kaitlin", "Ali"]

function writeCards(peeps) {
  for (let i =0; i < peeps.length; i++)
  {console.log(`Thank you, ${peeps[i]}, for the wonderful birthday gift!`);}
  return peeps;
}

writeCards(peeps);
// Code your solutions in this file
const peeps = ["Lisa", "Kaitlin", "Jan"]

function writeCards(peeps) {
  for (let i =0; i < peeps.length; i++)
  {console.log(`Thank you, ${peeps[i]}, for the wonderful surprise gift!`);}
  return peeps;
}

writeCards(peeps);
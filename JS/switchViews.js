function switchTypes(txt, types, ability, stat, move) {
  document.getElementById(txt).style.visibility = 'hidden';
  document.getElementById(types).style.visibility = 'visible';
  document.getElementById(ability).style.visibility = 'hidden';
  document.getElementById(stat).style.visibility = 'hidden';
  document.getElementById(move).style.visibility = 'hidden';
}

function switchAbilities(txt, types, ability, stat, move) {
  document.getElementById(txt).style.visibility = 'hidden';
  document.getElementById(types).style.visibility = 'hidden';
  document.getElementById(ability).style.visibility = 'visible';
  document.getElementById(stat).style.visibility = 'hidden';
  document.getElementById(move).style.visibility = 'hidden';
}

function switchStatus(txt, types, ability, stat, move) {
  document.getElementById(txt).style.visibility = 'hidden';
  document.getElementById(types).style.visibility = 'hidden';
  document.getElementById(ability).style.visibility = 'hidden';
  document.getElementById(stat).style.visibility = 'visible';
  document.getElementById(move).style.visibility = 'hidden';
}

function switchMoves(txt, types, ability, stat, move) {
  document.getElementById(txt).style.visibility = 'hidden';
  document.getElementById(types).style.visibility = 'hidden';
  document.getElementById(ability).style.visibility = 'hidden';
  document.getElementById(stat).style.visibility = 'hidden';
  document.getElementById(move).style.visibility = 'visible';
}

function switchTxt(txt, types, ability, stat, move) {
  document.getElementById(txt).style.visibility = 'visible';
  document.getElementById(types).style.visibility = 'hidden';
  document.getElementById(ability).style.visibility = 'hidden';
  document.getElementById(stat).style.visibility = 'hidden';
  document.getElementById(move).style.visibility = 'hidden';
}

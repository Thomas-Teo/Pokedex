export function randomNumbers(movesLength) {
  console.log(movesLength);
  console.log('valor recebido');

  var random_number_0 = Math.floor(Math.random() * 100);
  var random_number_1 = Math.floor(Math.random() * 100);
  var random_number_2 = Math.floor(Math.random() * 100);
  var random_number_3 = Math.floor(Math.random() * 100);

  console.log(random_number_0);
  console.log(random_number_1);
  console.log(random_number_2);
  console.log(random_number_3);
  console.log('antes');

  while (
    random_number_0 === random_number_1 ||
    random_number_0 === random_number_2 ||
    random_number_0 === random_number_3 ||
    random_number_0 > movesLength
  ) {
    random_number_0 = Math.floor(Math.random() * 100);
    console.log(random_number_0);
    console.log('antes');
  }
  while (
    random_number_1 === random_number_2 ||
    random_number_1 === random_number_3 ||
    random_number_1 > movesLength
  ) {
    random_number_1 = Math.floor(Math.random() * 100);
    console.log(random_number_1);
    console.log('antes');
  }
  while (random_number_2 === random_number_3 || random_number_2 > movesLength) {
    random_number_2 = Math.floor(Math.random() * 100);
    console.log(random_number_2);
    console.log('antes');
  }
  while (random_number_3 > movesLength) {
    random_number_3 = Math.floor(Math.random() * 100);
    console.log(random_number_3);
    console.log('antes');
  }

  console.log(random_number_0);
  console.log(random_number_1);
  console.log(random_number_2);
  console.log(random_number_3);
  return random_number_0, random_number_1, random_number_2, random_number_3;
}

var country = 'Canada';
var population = 38;
console.log('Step 1 - Country:', country, '| Population:', population); // C=Canada, p=38

var population = 40;
console.log('Step 2 - Updated Population:', population); // p=40, c=Canada

var capital = 'Ottawa';
console.log('Step 3 - Capital:', capital); // Ca=ottawa, p=40, c=Canada

country = 'Australia';
capital = 'Canberra';
console.log(
  'Step 4 - Updated Country:',
  country,
  '| Updated Capital:',
  capital,
); // ca=Canberra, c=Australia, p=40

var country = 'Japan';
var population = 126;
var capital = 'Tokyo';
console.log(
  'Step 5 - Final Values => Country:',
  country,
  '| Population:',
  population,
  '| Capital:',
  capital,
); // c=Japan, p=126, ca=Tokyo

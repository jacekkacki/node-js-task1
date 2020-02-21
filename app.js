const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['James', 'John', 'Robert', 'Michael', 'William',
'David', 'Richard', 'Charles', 'Joseph', 'Thomas',
'Christopher', 'Daniel', 'Paul', 'Mark', 'Donald',
'George', 'Kenneth', 'Steven', 'Edward', 'Brian'];
const femaleNames = ['Emily', 'Hannah', 'Madison', 'Ashley', 'Sarah',
'Alexis', 'Samantha', 'Jessica', 'Elizabeth', 'Taylor',
'Lauren', 'Alyssa', 'Kayla', 'Abigail', 'Brianna',
'Olivia', 'Emma', 'Megan', 'Victoria', 'Anna'];
const lastNames = ['Anderson', 'Aikin', 'Bateman', 'Bowers', 'Boyd',
 'Cannon', 'Cast', 'Deitz', 'Dewalt', 'Ebner', 
 'Frick', 'Hancock', 'Hoffman', 'Kassing', 'Lawless',
 'Lawicki', 'McCormack', 'Miller', 'Myers', 'Nugent',
 'Ortiz', 'Paiser', 'Pak', 'Quinn', 'Solberg'];

 const randChoice = (arr) => {
  return arr[Math.floor(Math.random(arr)*arr.length)]
 };

 let people = [];

 for( let i = 0; i < 20; i++ ){
   let name = ''
    let gender = randChoice(genders);
    if( gender === 'M') {
      name = randChoice(maleNames);
    } else {
      name = randChoice(femaleNames);
    }
    let lastName = lastNames[Math.floor(Math.random(lastNames)*lastNames.length)];

    const minAge = 18;
    const maxAge = 78;
    let age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

    people.push({gender, name, lastName, age});
 }

 const peopleJSON = JSON.stringify(people);

 fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file people.json has been saved!');
});
 
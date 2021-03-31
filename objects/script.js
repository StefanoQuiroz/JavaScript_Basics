var Dany = {
    first_name: 'Daenerys',
    last_name: 'Targaryen',
    age: 22,
    allegiance: 'House Targaryen',
    ancestry: 'Valyrian',
    titles: ['Queen of the Andals, the Rhoynar and the First Men', 'Lady Regent of the Seven Kingdoms', 'Protector of the Realm', 'Khaleesi of the Great Grass Sea', 'Breaker of Chains', 'Mother of Dragons', 'Queen of Meereen']
  }

  //console.log(Dany.allegiance); // Targaryen

  var dojo = {};
  dojo = {
      name: "Coding Dojo",
      number_of_students: 30,
      instructors: ["Jake", "Carito", "Dwayne"],
      location : {
          city : "Santiago de chile",
          state: "Santiago",
          zipcode: 95112
      },
      snacks : ['Fig bars', 'Bagels', 'Popcorn', 'Apples'],
      glazedDonuts : [
        {
            frosting: 'glazed',
            style: 'cake',
            type: 'old fashioned',
            age: 45,
            time: 'minutes'
        },
        {
            frosting: 'glazed',
            style: 'yeast raised',
            type: 'regular',
            age: 5,
            time: 'minutes' 
        },
        {
            frosting: 'glazed',
            style: 'yeast raised',
            type: 'jelly filled',
            age: 1,
            time: 'seconds'
        }
    ]
  };

console.log(dojo.glazedDonuts[2].type);

// console.log(dojo.name, dojo.number_of_students, dojo.instructors[0], dojo.location.city);
// console.log(dojo["name"]);
// dojo["instructors"].push("Luke");
// console.log(dojo.instructors);
// console.log(dojo.snacks[0], " ", dojo.snacks);
// Para actualizar los keys y sus values
// dojo.number_of_students = 30;
// dojo.location.city = "Manhattan";
// dojo.location.state = "New York";
// dojo.location.zipcode = "Unknown";

// console.log(`${dojo.number_of_students}   ${dojo.location.city}      ${dojo.location.state}       ${dojo.location.zipcode}`);
// console.log(dojo);
// Array Objects:
// var glazedDonuts = [
//     {
//         frosting: 'glazed',
//         style: 'cake',
//         type: 'old fashioned',
//         age: 45,
//         time: 'minutes'
//     },
//     {
//         frosting: 'glazed',
//         style: 'yeast raised',
//         type: 'regular',
//         age: 5,
//         time: 'minutes' 
//     },
//     {
//         frosting: 'glazed',
//         style: 'yeast raised',
//         type: 'jelly filled',
//         age: 1,
//         time: 'seconds'
//     }
// ];

// var purchase;
// if((glazedDonuts[0].age < 55 && glazedDonuts[0].time == 'minutes') || (glazedDonuts[0].time == 'seconds')){
//     purchase = glazedDonuts[0];
//     console.log(purchase);
// } else {
//     console.log('sorry it has been out a bit longer');
// }
// var purchase = 0;
// for(var donut in glazedDonuts){
//     console.log(glazedDonuts[donut]);
//     if(glazedDonuts[donut].age < 50 && glazedDonuts[donut].age > 1){ 
//         purchase++;
//     } else {
//         console.log('Not this donut ...');
//     }
// }
// console.log(purchase);

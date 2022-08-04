//Address book practice

var addressBook = {
  John: {
    city: 'Tulsa',
    state: 'OK'
  },
  Jane: {
    city: 'Dover',
    state: 'DE'
  }
}
//Returns Tulsa
console.log(addressBook.John.city);


//Tweet practice
var tweet = {
  Leira: {
    macbook: true,
    happy: true
  },
  Matt: {
    macbook: false,
    jealous: true
  }
}

//Returns true
console.log("Matt is feeling jealous of Leira", tweet.Matt.jealous);

// var suitcase = {
//   socks: 4,
//   jeans: 1
// };

// suitcase.shirts = 3;
// suitcase.swimsuits = true;
// delete suitcase.socks;

// console.log(Object.keys(suitcase));
// console.log(Object.values(suitcase));

// var zoo = {
//   giraffes: 3,
//   zebras: 12,
//   hippos: 2
// };

// console.log(Object.keys(zoo))
// console.log(Object.values(zoo))
// console.log(zoo.giraffes)
// zoo.lions = 2;
// console.log(zoo)
// console.log(zoo.monkeys)
// zoo.parrots = 25;
// console.log(zoo)
// console.log(Object.keys(zoo))

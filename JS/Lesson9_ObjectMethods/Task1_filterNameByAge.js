const getAdults = (obj) =>
  Object.entries(obj)
    .filter((array) => array[1] >= 18)
    .map((name) => name[0]);

// examples
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
// getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }

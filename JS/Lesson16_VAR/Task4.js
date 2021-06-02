// var foo = 1;

// function bar() {
//   if (!foo) {
//     var foo = 10;
//   }

//   return foo;
// }

// var foo = bar();

// =====================

// eslint-disable-next-line import/no-mutable-exports
let foo = 1;

function bar() {
  if (!foo) {
    foo = 10;
  }

  return foo;
}

foo = bar();

export default foo;

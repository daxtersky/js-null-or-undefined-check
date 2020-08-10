// TODO:
// DISTINGUISH 3 STATES OF A VARIABLE WITH UNDEFINED AND NULL

const varNull;
const varDefined;
console.log('varNull init', varNull);
console.log('varDefined init', varDefined);


setTimeout(() => {

  // WE RECEIVE (OR NOT) DATA FROM BACKEND
  console.log('--- a call to backend ---')
  varNull = [];
  varDefined = [3,54,99];

  if (varNull.length === 0) {
    varNull = null;
    console.log('varNull', varNull);
  } else {
    varNull = varNull[varNull.length - 1];
    console.log('varNull', varNull);
  }

  if (varDefined.length === 0) {
    varDefined = null;
    console.log('varDefined', varDefined);
  } else {
    varDefined = varDefined[varDefined.length - 1];
    console.log('varDefined', varDefined);
  }
}, 600);


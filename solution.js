const aepfel = 20;
const orangen=30;

// Frage1//
const istAepfelGlechOrangen= aepfel === orangen;
console.log("Frage1" ,istAepfelGlechOrangen);
// Frage2//
const istAepfelNichtGlechOrangen= aepfel !== orangen;
console.log("Frage2" , istAepfelNichtGlechOrangen);
// Frage3//
const istAepfelGroesserAlsOrangen= aepfel > orangen;
console.log("Frage3" ,istAepfelGroesserAlsOrangen);

// Frage4//
const istAepfelGroesserOderKleinerAlsOrangen= aepfel >= orangen;
console.log("Frage4" ,istAepfelGroesserOderKleinerAlsOrangen);

// Frage5//
const istOrangenGroeserAlsAepfel= aepfel >= orangen;
console.log("Frage5" , istOrangenGroeserAlsAepfel);

// Frage6//
const mangos = 5;
const mangosMalAepfel=mangos*aepfel;
const mangosPlusOrangen= mangos+orangen;
const istmangosMalAepfelGroeserAlsmangosPlusOrangen= mangosMalAepfel >= mangosPlusOrangen;
console.log("Frage6" , istmangosMalAepfelGroeserAlsmangosPlusOrangen);

// Frage7//
const x = aepfel -mangos;
const y = orangen/x;
console.log("Frage7" ,mangos>=y)


// Frage8//
console.log("Frage8" ,mangos === aepfel ===orangen);


//Frage9//

const a= aepfel% mangos ;
const b= orangen% mangos;

console.log ("Frage9" , a===b);


//Frage10//

const m =mangos + aepfel;
const n =orangen-mangos;
 console.log ("Frage10" , m>n);

console.log('this works');

let nouns = ["heart", "rainbow", "ocean"];
let verbs = ["look", "make", "continue"];
let adjectives = ["good", "different", "possible"];

//Pick a random element from each array
let noun = nouns[Math.floor(Math.random()*nouns.length)]
let verb = verbs[Math.floor(Math.random()*verbs.length)]
let adjective = adjectives[Math.floor(Math.random()*adjectives.length)]

console.log(noun)
console.log(verb)
console.log(adjective)

// Place it into the sentence
let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky`

console.log(sentence)
document.write(sentence)

console.log(nouns[Math.floor(Math.random()*nouns.length)])


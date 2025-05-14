let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = [".com", ".es", ".org", ".hack"]

let domain = [];

for (let pro of pronoun) {
  for (let ad of adj) {
    for (let nou of noun) {
      for (let ext of extensions) {
        domain.push(`${pro}${ad}${nou}${ext}`);
      }
    }
  }
}
console.log(domain.join('\n'));
// This code will create a message using a book that my kids , called "would you like". 
// It will let you select a base and a topping eg. the base would be something like "toast" and
// the topping would be something like "ketchup" and so it would read "would you like ketchup on your toast".
// some of the combinations were silly and made us laugh....
const wouldYouLike = () => {
    const bases = ['toast', 'crumpet', 'waffle', 'pancake', 'bread', 'panini', 'pizza', 'cake', 'cracker','steak'];
    const topping = ['mud', 'kethcup', 'peas', 'marmite', 'pesto', 'fish', 'meat', 'mustard', 'monkey'];
    const baseIdx = Math.floor(Math.random() * bases.length);
    const toppingIdx = Math.floor(Math.random() * topping.length);
    return `Would you like ${topping[toppingIdx]} on your ${bases[baseIdx]} ?`;
}
console.log(wouldYouLike());
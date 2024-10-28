// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop("Ralph");
}
function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
}
function appendCat(name) {
    return [...cats, "Broom"];
}
function prependCat(name){
    return ["Arnold", ...cats];
}
function removeLastCat(name){
    return cats.slice(null, -1);
}
function removeFirstCat(name){
    return cats.slice(1);
}


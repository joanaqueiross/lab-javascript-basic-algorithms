//itiration 1 exercise 1
let hacker1 = "Joana";
console.log (`The driver name is ${hacker1}`);
let hacker2 = "Catarina";
console.log (`The navigator name is ${hacker2}`);

//itiration 2 exercise 1 
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name it has ${hacker1.length} characters`);
  }
else if (hacker1.length<hacker2.length) {
  console.log("The navigator has the longest name it has"+ hacker2.length + "characters");
  }
else  {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

//itiration 3 exercise 1 

    console.log(hacker1.toLocaleUpperCase().split("").join(" "));



let str2 = "";
for (let i=0; i<hacker1.length; i++){
str2+=hacker1[i].toUpperCase()+ " ";
} 
console.log(str2);

let capitizeWithSpaces = "";
for (let i=0; i <hacker1.lenght; i= i +1){
  const letter= hacker1 [i];
  capitizeWithSpaces += letter.toUpperCase();
  if (!(i===hacker.length - 1)){
    capitizeWithSpaces += "_";
  }
console.log (capitizeWithSpaces);
}
console.log ("Final Result", capitizeWithSpaces);


str2 = "";
for (let i = hacker2.length-1; i>=0;i--){
  str2+=hacker2 [i]
console.log (str2);
}
console.log (str2)


let var1= "The driver's name goes first"
let var2= "Yo, the navigator goes first definitely."
let var3= "What?! You both have the same name?"

if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.")
  }
  else if
  (hacker1 < hacker2) {
    console.log("The driver's name goes first")
  }
  else{
    console.log ("What?! You both have the same name?")
  }
//with function
let arr = [var1, var2, var3];
arr.sort(function(a, b) {
    return a.localeCompare(b);
});
console.log(arr); 


//bonus 1
const text = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id scelerisque sem. Etiam augue justo, malesuada in sagittis ut, tincidunt nec purus. Vivamus blandit sapien eget semper molestie. Phasellus ultricies, leo aliquam egestas lacinia, odio justo consectetur nunc, at scelerisque leo elit sit amet justo. Vestibulum vel magna sed mi sagittis luctus. Donec vestibulum nisi ac ex fringilla dignissim vitae ut ipsum. Pellentesque faucibus tortor eget massa finibus, id sodales nibh maximus. Integer ac lorem arcu. Integer congue nulla sed tortor mollis tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent facilisis quis metus a consequat. In hac habitasse platea dictumst. Donec scelerisque urna et metus ultricies mattis.Nam congue erat lectus, non condimentum ipsum dignissim ac. Fusce ultrices est sed cursus maximus. In quis purus vel ex aliquet porta. Morbi accumsan eros a tristique posuere. In in pretium nisi. Etiam consequat ultricies suscipit. Suspendisse fringilla eget est non mattis. Aenean eu tellus rutrum, luctus eros id, varius ante. Fusce commodo gravida nulla, sed commodo risus pellentesque eu. Ut suscipit ultricies nulla, a sagittis elit tempus quis. Nullam aliquet aliquet metus, quis ornare ante mattis sit amet. Aenean risus lorem, viverra a lacinia sit amet, viverra eu nisi. Proin sit amet accumsan sem, eget fermentum nunc. Vestibulum at ligula vehicula, eleifend turpis ut, tempus nunc. Sed rutrum nisi vitae ex porttitor, id tristique libero pretium. Fusce sit amet lacus euismod, accumsan augue vel, fermentum dolor. Quisque a metus eget eros cursus lobortis id vitae orci. Duis massa odio, tempor ultricies rutrum eget, consectetur sagittis lacus. Aenean non ligula a nibh pharetra iaculis non eu dolor.")

let totalWords= 0
for (i=0; i < text.length; i++){
  if (text[i] === " "){
  totalWords++;
  }
}
//console.log(totalWords)

let etTotalCount = 0
for (i=0; i < text.length; i++){
  const currentLetter = text [i];
  const nextLetter1 = text [i+1];
  const nextLetter2 = text [i+2];
  const nextLetter3 = text [i+3];
  if (
    currentLetter === " " &&
    nextLetter1 === "e" &&
    nextLetter2 === "t"&&
    nextLetter3 === " "
  ){
  etTotalCount += 1
  }
}
console.log(etTotalCount)
/*
SEVEN BOOM!
Create a function that takes an array of numbers and return
Boom! if the number 7 appears in the array otherwise returns there's 
no 7 in the array.
Expected result:
sevenBoom([1, 2, 3, 4, 5, 6, 7]) -> Boom!
sevenBoom([8, 6, 3, 100]) -> There's no 7 in the array
sevenBoom([2,55,60,97,86]) -> Boom!
*/
/*function sevenBoom(arr){
    var string_return ="There's no 7 in the array"
    for(var i=0; i<arr.length;i++){
        if(arr[i]==7){
            return "Boom!"
        }else{
            while(true){
            
            if(arr[i]%10==7){
                return "Boom!";
            }
            arr[i]=  Math.floor(arr[i]/10)
            console.log(arr[i])
            if(arr[i]<10){
                break
            }
        }
    }    
    }
    return "There's no 7 in the array";
}

console.log(sevenBoom([2,55,60,76,86]))*/
/*
SHUFFLE THE NAME
Create a function that accepts the string of a person's
first and last name and returs the a string with the 
first and last name swapped.
Expected Result.
nameShuffle("Linus More") -> More Linus
*/


const nameShuffle=(name_surname)=>{
    var surname_name;
    surname_name = name_surname.split(" ").reverse()
    .join(" ")
    return surname_name;
}
var name ="Crispen Gari"
console.log(nameShuffle(name))
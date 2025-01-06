//In Javascript write a function that takes a string, 
// splits the string by dots (.) and returns the second 
// last string from that split. If there are no dots in 
// the original string return an empty string. 
// For example the parameter "ggg.ttt.com", 
// the function returns "ttt".


// function lastWord(str){
//     let last=''
//     let char=''
//     for(let i=0;i<str.length;i++){
//         if(str[i] === '.'){
//             if(i === str.length-1){
//                 return last
//             }
//             last = char
//             char = ''
//         }else{
//             char += str[i]
//         }
//     }
//     return last
// }

// console.log(lastWord("ggg.ttt.com"))


//-----------------------------------------------------------------


//In Javascript write a function that will remove the matching double 
// quotes (") or single quotes (') at the beginning and end 
// of a string if they are present. For example if the string 
// 'string1' is passed in, it will return string1, if 'string1 is 
// passed in, it returns 'string1 (quote not removed)



// function remove(str){
    
//     if(str[0] === `'` && str[str.length-1] === `'` || str[0] === `"` && str[str.length-1] === `"`){
//         return str.slice(1, -1); 
//     }else{
//         return str
//     }
// }

// console.log(remove(`"hello world"`))

//-----------------------------------------------------------------------

// write a function to count the  number of 'w' in a string

// function count(str){
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if(str[i] === 'w'){
//             count++
//         }
//     }
//     return count
// }

// console.log(count("world"))
// console.log(count("wow"))
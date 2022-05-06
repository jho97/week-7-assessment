// const addToZero = arr => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//                 console.log(arr[i] + arr[j])
//                 if (arr[i] + arr[j] == 0 ){
//                     return true
//                 }
//         }
//         return false
//     }
// }

// // console.log(addToZero([4,2,3,-4]))

// const hasUniqueChars = word => {
//     let uniqueChars = new Set ([])
//     for (let i = 0; i < word.length; i++) {
//         uniqueChars.add(word[i])
//     }
//     return uniqueChars.size === word.length
// }

// console.log(hasUniqueChars("monday"))

// const isPangram = sentence => {
//     // wanted to do something where it could match the index values inside my array, then I thought it would take some for loops. Then I found something on the internet about regex
//     // let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     let newSentence = sentence.toLowerCase().match(/[a-z]/g)

//     let alphabet = [...new Set(newSentence)]

//     return alphabet.length === 26
// }

// console.log(isPangram("I like cats, but not mice"))
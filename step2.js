const addToZero = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
                console.log(arr[i] + arr[j])
                if (arr[i] + arr[j] == 0 ){
                    return true
                }
        }
        return false
    }
}

// console.log(addToZero([4,2,3,-4]))
//I think my runtime would be around 5ms

const hasUniqueChars = word => {
    let uniqueChars = new Set ([])
    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

// console.log(hasUniqueChars("monday"))
//I think my runtime would be around 10ms


const isPangram = sentence => {
    // wanted to do something where it could match the index values inside my array, then I thought it would take some for loops. Then I found something on the internet about regex
    // let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let newSentence = sentence.toLowerCase().match(/[a-z]/g)

    let alphabet = [...new Set(newSentence)]

    return alphabet.length === 26
}

// console.log(isPangram("I like cats, but not mice"))
//I think my runtime would be around 50ms


const findLongestWord = arr => {
    let longestWord = " "

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longestWord.length) {
            longestWord = arr[i]
            answer = (longestWord.match(/[a-z]/g) || []).length
        }
    }
    return answer
}

// console.log(findLongestWord(["hi", "hello"]))
//I think my runtime would be around 20ms


// extra credit
// I don't remember much of the space complexity other than that it refers to the amount of memory space used by a function. I assume functions that require going back and forth through an input would take more space than those that just place a value at the end or begining of something. I think the most packed functions from the four are the ones that have sentences and require more need to break the strings into individual pieces.
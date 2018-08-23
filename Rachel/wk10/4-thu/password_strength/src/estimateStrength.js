


function estimateStrength(password) {
    const hasSpecialChars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    const hasLetterNumber = /[^\W]/.test(password)

    if (hasLetterNumber === true && hasSpecialChars === true) {
        return {
            score: 5,
            hasSpecialChar: true, 
            hasLowerCase: true, 
            hasUpperCase: true,
            hasNumber: true,
            isOver8Char: true
        }
    }
    if (hasLetterNumber === true && password.length > 8) {
        return {
            score: 4, 
            hasLowerCase: true, 
            hasUpperCase: true,
            hasNumber: true,
            isOver8Char: true
        }
    }
   if (/[a-z]/.test(password) === true) {
       return {
        score: 1,
        hasLowerCase: true
       }
   } 
   if (hasSpecialChars === true) {
       return {
        score: 1
       } 
   }
}

estimateStrength('pudding')
estimateStrength('!@#$%').score
estimateStrength('cakePudd1ng')


module.exports = estimateStrength
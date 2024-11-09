/*--------------------------For Question no. 1 ---------------------- */
let array = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];

function largerThanIn(n,array){
    let newArray = [];
    for(el of array){
        if(el > n){
            newArray.push(el);
        }
    }
    return newArray
}

/*--------------------------For Question no. 2 ---------------------- */
let oldString = "AnkushYadav";

function uniqueCharsOf(string) {
    let ans = "";
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (ans.indexOf(char) === -1) {
            ans += char;
        }
    }
    return ans;
}

/*--------------------------For Question no. 3 ---------------------- */
let countryNames = ["India","Ukrain","South Africa","West Indies","Australia","Pakistan","Afghanistan"];

function longestLengthIn(arr){
    let longest = arr[0];
    for(let i=0; i<arr.length; i++){
        let curr = arr[i];
        if(curr.length > longest.length){
            longest = curr;
        }
    }
    return longest
}

/*--------------------------For Question no. 4 ---------------------- */
function countVovelsIn(str){
    let count = 0;
    for(char of str){
        if( char == 'A' ||
            char == 'a' ||
            char == 'E' ||
            char == 'e' ||
            char == 'I' ||
            char == 'i' ||
            char == 'O' ||
            char == 'o' ||
            char == 'U' ||
            char == 'u'
        ){
            count++;
            console.log(char);
        }
    }
    return count
}

/*--------------------------For Question no. 5 ---------------------- */
function randBetween(end,start=0){
    let diff = end - start;
    let randomNum = Math.floor(Math.random()*(end+1));

    if(randomNum > end){
        for(let i=0; randomNum > end;){
            randomNum -= diff;
        }
    }else if(randomNum < start){
        for(let i=0; randomNum<=start;){
            randomNum += diff;
        }
    }
    return randomNum
}
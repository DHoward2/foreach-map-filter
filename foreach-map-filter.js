function doubleValues(arr) {
    let doubleArr = []; 
    arr.forEach(function(num){
        return doubleArr.push(num * 2);
    })
    return doubleArr;
}

function onlyEvenValues(arr) {
    let evenArr = arr.filter(function(num){
        return num % 2 === 0;
    })
    return evenArr;
}

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length -1]);
    })
    return newArr;
}

function addKeyAndValue(arr,key,value){
    let newArr = [];
    arr.forEach(function(val){
        val[key] = value;
        newArr.push(val);
    })
    return newArr;
}

function vowelCount(string){
    let result = {};
    const arrString = Array.from(string.toLowerCase());
    const vowelCheck = 'AEIOUaeiou';
    arrString.forEach(function(char){
        if(vowelCheck.indexOf(char) !== -1){
            if(!result[char]){
                result[char] = 1;
            }else {
                result[char] += 1;
            }
        }
    })
    return result;
}

function doubleValuesWithMap(arr){
    let doubleArr = arr.map(function(num){
        return num * 2;
    })
    return doubleArr;
}

function valTimesIndex(arr){
    let indexArr = arr.map(function(num){
        return num * (arr.indexOf(num));
    })
    return indexArr;
}

function extractKey(arr, key){
    let keyArr = arr.map(function(val){
        return val[key];
    })
    return keyArr;
}

function extractFullName(arr){
    let nameArr = arr.map(function(name){
        return name['first'] + ' '+ name['last'];
    })
    return nameArr;
}

function filterByValue(arr, key){
    let filterArr = arr.filter(function(val){
        return val.hasOwnProperty(key);
        
    })
    return filterArr;
}

function find(arr, value){
    let check = arr.filter(function(val){
        return val === value;
    })
    if(check.indexOf(value) !== -1) return value;
    
}

function findInObj(arr, key, value){
    let filterArr = arr.filter(function(val){
        return val.hasOwnProperty(key) && val[key] === value;
    })
    return filterArr[0];

}

function removeVowels(string){
    let strArr = Array.from(string.toLowerCase());
    let vowels = 'AEIOUaeiou';
    let filterArr = strArr.filter(function(char){
        return vowels.indexOf(char) === -1;
    })
    return filterArr.join('');
}

function doubleOddNumbers(arr){
    let oddArr = arr.filter(function(num){
        return num % 2 === 1;
    })
    let doubleOddArr = oddArr.map(function(num){
        return num * 2;
    })
    return doubleOddArr;
}
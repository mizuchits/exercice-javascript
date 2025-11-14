function mostFrequent(arr) {
    const freqMap = {};
    arr.forEach(item => freqMap[item] = (freqMap[item] || 0) + 1);
    return Object.keys(freqMap).reduce((a, b) => freqMap[a] > freqMap[b] ? a : b);
}

let arr = [1, 2, 1, 3, 1];
console.log(mostFrequent(arr)); 
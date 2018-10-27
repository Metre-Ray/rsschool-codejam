function sumOfOther(arr) {
    return arr.map((item, i) => arr.reduce((result, curr, index) => {
        if (index !== i) result += curr;
        return result;
    }, 0));
}

module.exports = sumOfOther;

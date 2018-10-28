function make(...args) {
    if (typeof args[args.length - 1] === 'function') {
        const func = args.splice(args.length - 1, 1)[0];
        return args.reduce((result, item) => func(result, item));
    }
    function temp(...smth) {
        const ar = args.concat(smth);
        return make(...ar);
    }
    return temp;
}

module.exports = make;

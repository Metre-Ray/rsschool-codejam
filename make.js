function make(...args) {
    if (typeof args[args.length - 1] === "function") {
        let func = args.splice(args.length - 1, 1)[0];
        return args.reduce((result, item) => func(result, item));
    }
    else {
        function temp(...smth) {
            let ar = args.concat(smth);
            return make(...ar);
        }
        return temp;
    }
}
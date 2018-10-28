function recursion(tree, ans = [], i = 0) {
    const k = i + 1;
    if (tree === undefined) return undefined;
    if (ans[i] === undefined) ans.push([]);
    ans[i].push(tree.value);
    recursion(tree.left, ans, k);
    recursion(tree.right, ans, k);
    return ans;
}

module.exports = recursion;

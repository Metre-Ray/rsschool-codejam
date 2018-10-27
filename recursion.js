function recursion(tree, ans = [], i = 0) {
    if (tree === undefined) return ;
    if (ans[i] === undefined) ans.push([]);
    ans[i].push(tree.value);
    i +=1 ;
    recursion(tree.left, ans, i);
    recursion(tree.right, ans, i);
    return ans;
}

module.exports = recursion;
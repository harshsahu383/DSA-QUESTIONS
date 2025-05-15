// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
// Sort the array into binary Search Tree

class TreeNode{
    constructor(val,left,right){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function build(left, right) {
  if (left > right) return null;

  const mid = Math.floor((left + right) / 2);
  const node = new TreeNode(nums[mid]);

  node.left = build(left, mid - 1);
  node.right = build(mid + 1, right);

  return node;
}

return build(0, nums.length - 1);

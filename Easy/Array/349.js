// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
function IntersectionObserver(nums){

    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const result = [...set1].filter((num) => set2.has(num));

    return result;
}
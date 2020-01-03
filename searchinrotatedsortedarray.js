var search = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    let mid

    while (low <= high) {
        mid = Math.floor((low + high) / 2)

        if (nums[mid] === target) {
            return mid
        } else if (nums[low] <= nums[mid]) { //everything in first half is in correct order
            if (target >= nums[low] && target < nums[mid]) { //check if target is in that first half
                high = mid - 1 //choose first half if yes
            } else {
                low = mid + 1 //choose second half if not
            }
        } else { //everything in second half is in correct order
            if (target <= nums[high] && target > nums[mid]) { //see if target is in second half
                low = mid + 1; // choose second half if yes
            } else {
                high = mid - 1 // choose first half if not
            }
        }
    }

    return -1
};

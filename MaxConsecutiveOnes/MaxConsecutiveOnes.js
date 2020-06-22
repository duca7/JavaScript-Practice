var nums = [1, 1, 1, 1, 1, 0];

function findMaxConsecutiveOnes(nums){
    var max = 0;
    var count =  0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]  ==0) {
            count == 0;
        }
        else{
            count ++;
            max = (count > max) ? count : max;
        }
    }
    return max;
}

console.log(findMaxConsecutiveOnes(nums));
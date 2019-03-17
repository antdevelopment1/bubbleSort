// Create a function using bubble sort quadratically
function bubbleSort(arr) {
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Loop through the array again
        for (j = 0; j < arr.length; j++) {
            // We check of the value at the current index is greater than the value next to it
            if (arr[j] > arr[j + 1]) {
                // If it is then we the current value in a variable that can used later
                var temp = arr[j];
                // We reassign the current value we are analayzing and reassign it to be the value next to itself(the lower value of the two)
                arr[j] = arr[j + 1];
                // We assign the value of the the higher number to be the next spot and assign it our temp value
                arr[j + 1] = temp;
            }
        }
    }
    // We return the array
    return arr;
}

console.log(bubbleSort([1,5,22,3,4,56,33]))
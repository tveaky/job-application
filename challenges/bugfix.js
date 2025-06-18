function secondLargest(arr) {
  arr.sort();
  return arr[arr.length - 2];
}

// Example test
console.log(secondLargest([10, 5, 3, 9, 2])); // Should return 9

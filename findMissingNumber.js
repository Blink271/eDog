const findMissingNumber = (arr) => {
    const n = arr.length;
    const total = ((arr[0] + arr[n - 1]) * (n + 1)) / 2;
    const sum = arr.reduce((acc, curr) => acc + curr);
    return total - sum;
}

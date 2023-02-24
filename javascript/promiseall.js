const downloadStart = new Promise((resolve, reject) => {
    resolve('0%');
});
const downloadHalf = new Promise((resolve, reject) => {
    resolve('50%');
});
const downloadFull = new Promise((resolve, reject) => {
    resolve('100%');
});

Promise.all([downloadStart, downloadHalf, downloadFull]).then((result) => {
    console.log(result); // [ '0%', '50%', '100%' ]
});
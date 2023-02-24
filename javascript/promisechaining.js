let initProgress = 0;

const donwload = new Promise((resolve, reject) => {
    let progress = initProgress + 25;
    resolve(progress);
});

donwload 
    .then((result) => {
        console.log(`Download progress is ${result}%`);
        return result + 25;
    })
    .then((result) => {
        console.log(`Download progress is ${result}%`);
        return result + 50;
    })
    .then((result) => {
        if  (result === 100) {
            console.log('Download complete');
        }
    });
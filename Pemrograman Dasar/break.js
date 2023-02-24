let array = [1, 2, 3, 4, 5];
let index = 0;

while (index < array.length) {
    // keluar dari loop jika value sama dengan 3
    if (array[index] === 3) {
        break;
    }
    console.log(array[index]);
    index++;
}
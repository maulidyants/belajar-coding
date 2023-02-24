let array = [1, 2, 3, 4, 5];

for (let index = 0; index < array.length; index++) {
    /* lanjutkan loop jika value sama dengan 3
    tanpa eksekusi perintah selanjutnya */
    if (array[index] === 3) {
        continue;
    }

    console.log(array[index]);
}
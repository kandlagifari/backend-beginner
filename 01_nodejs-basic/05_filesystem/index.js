// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const path = require('path');


// Callback Async Method
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
fs.readFile(path.resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);


// // Sync Method
// const data = fs.readFileSync('notes.txt', 'UTF-8');
// console.log(data);
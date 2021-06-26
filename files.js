const { SSL_OP_NETSCAPE_CA_DN_BUG } = require('constants');
const fs = require('fs');

// read
// fs.readFile('./docs/blog1a.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// write
// fs.writeFile('./docs/blog2.txt', 'hello, world', () => {
//     console.log('file was written');
// })

// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         } 
//         console.log('folder deleted');
//     })
// }

// deleting
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
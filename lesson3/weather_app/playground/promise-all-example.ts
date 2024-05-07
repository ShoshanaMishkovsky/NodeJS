import { readFilePromise } from "./promise";

const FILE_1 = "file1";
const FILE_2 = "file2";

let data1: string, data2: string;

Promise.all([readFilePromise(FILE_1), readFilePromise(FILE_2)])
    .then(([res1, res2]) => {
        data1 = res1.toString();
        data2 = res2.toString();
        console.log(data1, data2);
    }).catch((err) => {
        console.log(err);
    })


// readFilePromise(FILE_1)
//     .then((data: Buffer) => {
//         data1 = data.toString();
//         return readFilePromise(FILE_2);
//     }).then((data: Buffer) => {
//         data2 = data.toString();
//         console.log(data1, data2);
//     });

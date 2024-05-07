import fs from 'fs';

export const readFilePromise = (fileUrl: string): Promise<Buffer> => new Promise((resolve, reject) => {
    fs.readFile(fileUrl, (err: any, data: Buffer) => {
        if (err) {
            reject(err);
        }
        resolve(data);
    });
});

export const writeFilePromise = (fileUrl: string, data: string): Promise<void> => new Promise((resolve, reject) => {
    fs.writeFile(fileUrl, data, (err: any) => {
        if (err) {
            reject(err);
        }
        resolve();
    });
})
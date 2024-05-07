import fs from 'fs'



export const goToSleepPromise = (ms: number): Promise<void> => new Promise((resolve, reject) => {
    setTimeout(((err: any) => {
            if (err) {
                reject(err);
            }
            resolve();
         
        }),ms)
  
});
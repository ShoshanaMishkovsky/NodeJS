
import { goToSleepPromise} from './promise';

function sleep(ms: number): Promise<void>{
    return goToSleepPromise(ms).then(()=>{
          console.log(`After sleeping ${new Date()}`) 
    }
     
    );
}
console.log("Start of the program");
console.log(`Before sleeping ${new Date()}`);
sleep(2000);



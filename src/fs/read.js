import fs, {constants} from 'node:fs';

const read = async () => {
    fs.access('./src/fs/files/fileToRead.txt', constants.F_OK, (err)=>{
        if (err) {
            throw new Error('FS operation failed') 
        } else {
            fs.readFile('./src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
                if (err) throw err;
            
                console.log(data);
            });
        }
    })
};

await read();
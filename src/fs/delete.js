import fs, {constants} from 'node:fs';

const remove = async () => {
    fs.access('./src/fs/files/fileToRemove.txt', constants.F_OK, (err)=>{
        if (err) {
            throw new Error('FS operation failed') 
        } else {
            fs.unlink('./src/fs/files/fileToRemove.txt', (err) => {
                if (err) throw err;
            }); 
        }
    })
    
};

await remove();
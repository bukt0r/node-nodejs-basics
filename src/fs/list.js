import fs, {constants} from 'node:fs';

const list = async () => {
    fs.access('./src/fs/files', constants.F_OK, (err)=>{
        if (err) {
            throw new Error('FS operation failed') 
        } else {
            fs.readdir('./src/fs/files', 'utf8', (err, files) => {
                if (err) throw err;
            
                console.log(files);
            });
        }
    })
};

await list();
import fs from 'node:fs';

const copy = async () => {
    fs.cp('./src/fs/files', './src/fs/files_copy', { recursive: true, errorOnExist: true, force:false, }, (err)=>{
        if (err) {
            throw new Error('FS operation failed')
        }
    } )
    
};

await copy();

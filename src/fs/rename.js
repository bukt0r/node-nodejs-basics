import fs, {constants} from 'node:fs';

const rename = async () => {
    fs.access('./src/fs/files_copy/properFilename.md', constants.F_OK, (err)=>{
        if (err) {
            fs.rename('./src/fs/files_copy/wrongFilename.txt', 
              './src/fs/files_copy/properFilename.md',
                (err) => {
                    if (err) {
                        throw new Error('FS operation failed')
                    }    
                } )      
        } else {
            throw new Error('FS operation failed') 
        }
    })
    
};

await rename();
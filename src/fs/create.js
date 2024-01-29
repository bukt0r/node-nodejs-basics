import fs, {constants} from 'node:fs';

const create = async () => {
    fs.access('./src/fs/files/fresh.txt', constants.F_OK, (err)=>{
        if (err) {
            fs.writeFile(
                './src/fs/files/fresh.txt',
                'I am fresh and young',
                'utf8',
                (err) => {
                    if (err) throw err
                }       
            );
        }
        else {
            throw new Error('FS operation failed');
        }
    }) 
};

await create();
const parseArgs = () => {
    const arr = process.argv
    const obj = {};

    for (let i=0; i<arr.length; i +=2) {
        const key = arr[i];
        const value = arr[i+1];

        obj[key] = value
    }
    console.log(Object.keys(obj)
        .filter((key) => key.startsWith('--'))
        .map((key) => `${key} is ${obj[key]}`)
        .join(', ')
        .replace(/--/g, '')
        
    );
};

parseArgs();
const parseEnv = () => {
    console.log(Object.keys(process.env)
        .filter((key) => key.startsWith('RSS'))
        .map((key) => `${key}=${process.env[key]}`)
        .join('; ')
    );

};

parseEnv();
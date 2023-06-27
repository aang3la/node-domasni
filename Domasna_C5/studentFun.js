const fs = require ("fs");

//? Dodavanje student vo fajlot
exports.fileWrite = (filename, data) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile(filename, data, "utf-8", (err) => {
            if(err) return reject(err);
            return resolve();
        });
    });
};

exports.fileRead = (filename) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(filename, "utf-8", (err, data)=> {
            if(err) return reject(err);
            return resolve(data);
        });
    });
};


//? Brishenje na student od fajlot
exports.fileDelete = (filename) => {
    return new Promise ((resolve, reject) => {
        fs.unlink(filename, (err) => {
            if(err) return reject(err);
            return resolve();
        });
    });
};
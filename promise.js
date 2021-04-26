let pr = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Da doi xong");
        //reject(new Error("Co loi"));
    }, 2000);
});

//pr.then(resolveHandle, rejectHandle);
//2
var fs = require('fs');

let readFile = (fileName) => {

    let pr = new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });

    });
    return pr;
}
readFile("./config/text.txt").then((data) => console.log(data), (err) => console.log("Err: " + err));
// async wait


let checkCountDown = async () => {
    let res = await pr;
    console.log(res);
}
checkCountDown();
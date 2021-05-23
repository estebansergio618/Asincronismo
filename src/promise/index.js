// con ECMCSCRIP 6
// arrow function
const somethingWillHappen = () =>{
    return new Promise ((resolve, reject) => {
        if (true){
            resolve("Hey! lo hicimos");
        } else {
            reject ("Whooooops!");
        }
    });
};

somethingWillHappen ()
    .then (response => console.log(response))
    .catch (err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            setTimeout(() =>{
                resolve("True")
            },2000)
        } else {
            const error = new Error ("Whoops!");
            reject(error);
        }
    });
}

somethingWillHappen2 ()
    .then(response => console.log (response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("Lista de resultados", response);
    })
    .catch(err => {
        console.error(err);
    })
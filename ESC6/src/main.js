const minhaPromise = () =>  new Promise((resolve, reject)=>{
    setTimeout(() => {resolve('ok'), 2000});
});

/*minhaPromise()
    .then(response => {
        console.log(response);
    })
    .catch(err =>{

    });
*/

/*async function executaPromisse(){
    console.log( await minhaPromise());
    console.log( await minhaPromise());
    console.log( await minhaPromise());
}
*/
const executaPromisse = async () =>{
    console.log( await minhaPromise());
    console.log( await minhaPromise());
    console.log( await minhaPromise());
};

executaPromisse();
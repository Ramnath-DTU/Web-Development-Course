// async function getData() {
//     //Simulate a getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);

//     });
// }

// settle means resolve or reject

// resolve means promise has settled successfully

// reject means promise has not settled successfully

async function getData() {
    //Simulate a getting data from a server
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = (await x).json()
    return data;
}

async function main() {

    console.log("Loading modules");

    console.log("Do something else");

    console.log("Load data");

    let data = await getData();

    console.log(data);

    console.log("process data");

    console.log("task 2");

}

main();

/* data.then((v) => {
    console.log(v); // This will log the resolved value of the promise (455)

    console.log(data); // This will log a Promise object, not the resolved value

console.log("process data");

console.log("task 2");

}) */
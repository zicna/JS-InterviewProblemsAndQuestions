console.log("START")

const whereAmI = async function(country){
    // ! async await just a sintatic sugar over then method in Promises
    // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res))


    const result = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    console.log(result)
    const data = await result.json();
    console.log(data)
}

whereAmI("serbia")
console.log("END")
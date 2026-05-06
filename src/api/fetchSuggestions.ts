

export default async function fetchSuggestions(input: string, count: number){
    try{
        const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=${count}&language=en&format=json`)
        const data = await res.json()
        return data.results
    }
    catch(err){
        // todo
        console.log(err)
    }
}
import { AppError } from "../components/error/AppError"


export default async function fetchSuggestions(input: string, count: number){
    try{
        const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=${count}&language=en&format=json`)

        if(!res.ok) throw new AppError("Failed to fetch weather", res.status)

        const data = await res.json()
        return data.results
    }
    catch(err){
        if(err instanceof AppError) throw err

        throw new AppError("Unknown Error", -1)

    }
}
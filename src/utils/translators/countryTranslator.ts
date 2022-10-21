import { Country } from "./types"

export const translate = (data: any[]): Country [] => {
    return data.map((el) => {
        return {
            name: el.name.common,
            flag: el.flag,
            area: el.area,
            population: el.population,
            capital: el.capital
        }
    })
}
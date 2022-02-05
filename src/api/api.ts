import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.coindesk.com/v1/bpi/',
})

export const randomAPI = {
    getRandomData() {
        return instance.get<randomDataType>('currentprice.json')
    },
}

//types
type randomDataType = {
    time: timeType
    disclaimer: string
    chartName: string
    bri: briType
}

type timeType = {
    updated: string
    updatedISO: string
    updateduk: string
}

type briType = {
    USD: currencyType
    GPB: currencyType
    EUR: currencyType
}

type currencyType = {
    code: string
    symbol: string
    rate: string
    description: string
    rate_float: string
}

export enum TaskStatuses {
    New = 0,
    inProgress = 1,
    Completed = 2,
    draft = 3
}





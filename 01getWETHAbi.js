import { ethers } from 'ethers'
import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

// polygon network
// get infos
const alchemyApi = process.env.alchemyApiKey
const POLYSCAN_API = process.env.POLYSCAN_API
// for upgradable contract you need to get the abi of the implementation contract.
const address = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619' // jpyc implementation contract

// const addressProxy = '0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB'
const url = `https://api.polygonscan.com/api?module=contract&action=getabi&address=${address}&apikey=${POLYSCAN_API}`

let abi

const getAbi = async () => {
    const res = await axios.get(url)
    abi = JSON.parse(res.data.result)
}

async function main() {
    await getAbi()
    console.log(abi)
}

main()

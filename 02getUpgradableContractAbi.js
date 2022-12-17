import { ethers } from 'ethers'
import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

// polygon network
// get infos
const alchemyApi = process.env.alchemyApiKey
const POLYSCAN_API = process.env.POLYSCAN_API
// for upgradable contract you need to get the abi of the implementation contract.
const address = '0xf2fAb05F26Dc8da5A3F24D015FB043DB7a8751Cf' // jpyc implementation contract

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

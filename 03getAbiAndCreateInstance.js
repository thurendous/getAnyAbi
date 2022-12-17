import { Contract, ethers } from 'ethers'
import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

// polygon network
// get infos
const alchemyApi = process.env.alchemyApiKey
const POLYSCAN_API = process.env.POLYSCAN_API
// for upgradable contract you need to get the abi of the implementation contract.
const address = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619' // weth
const url = `https://api.polygonscan.com/api?module=contract&action=getabi&address=${address}&apikey=${POLYSCAN_API}`

let abi
const getAbi = async () => {
    console.log(alchemyApi)
    const res = await axios.get(url)
    abi = JSON.parse(res.data.result)
    const provider = new ethers.providers.JsonRpcProvider(alchemyApi)
    const wethContract = new Contract(address, abi, provider)

    const name = await wethContract.name()
    const totalSupply = await wethContract.totalSupply()
    console.log(`name: ${name}`)
    console.log(`total supply: ${ethers.utils.formatEther(totalSupply)}`)
}

async function main() {
    await getAbi()
    // console.log(abi)
}

main()

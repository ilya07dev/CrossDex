import { ethers } from "ethers"
import {useSigner } from "wagmi"

export const revokeAbi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const useRevoke = () => {
    const { data:signer }:any = useSigner()
    
    return (addressContract:string, adrressSpender:string) => async () => {
        const contractErc20 = new ethers.Contract(addressContract, revokeAbi, signer);

        try {
            await contractErc20.approve(adrressSpender, 0)
        } catch(e) {
            console.log(e)
        }
    }
} 
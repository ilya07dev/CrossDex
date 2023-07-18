import axios from "axios";
import { useNetwork } from 'wagmi'
import { mockTokenImage } from "mook/linkImg";
import { allTokensUrl, txUserUrl } from "query/apiUrl";
import { useQuery } from "react-query";
import { ApprovalsResponseApi, ApprovalsTx } from "./type";
import { ethers } from "ethers";
import { formatDate } from "./lib";
import { tokens1Inch } from "query/apiUrl/tokens";
import { extraShortenAddress } from "utils/extraShortenAddress";
import { useAccount } from "wagmi";
import { convertToCorrectChains } from "utils/convertCorrectChains";

const abiApprove = [{
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
}]

const inter = new ethers.utils.Interface(abiApprove);

export const useGetApprovals = ():ApprovalsTx[] => {
    const {data } = useQuery(
        'marketTokens',
        () => axios.get(txUserUrl("0xc9e60656c8294b65F9617b85F55cc8EfbC43F051" ?? "", 1)), {
            refetchOnWindowFocus: false,
        }
    );
    const {data:allTokens } = useQuery(
        'allTokens',
        () => axios.get(allTokensUrl(1)),{
            refetchOnWindowFocus: false,
        }
    );

    const {address} = useAccount();
    const {chain} = useNetwork()
    const chainCurrent = convertToCorrectChains(chain?.id);
    // const {data } = useQuery(
    //     'marketTokens',
    //     () => axios.get(txUserUrl(address ?? "", chainCurrent)), {
    //         refetchOnWindowFocus: false,
    //     }
    // );
    // const {data:allTokens } = useQuery(
    //     'allTokens',
    //     () => axios.get(allTokensUrl(chainCurrent)),{
    //         refetchOnWindowFocus: false,
    //     }
    // );
    
    if(!data?.data || typeof data?.data?.result === 'string') return [];


    const Approvals:ApprovalsTx[] = data!.data.result
        ?.filter((tx:ApprovalsResponseApi) => tx.functionName === "approve(address _spender, uint256 _value)")
        .map((tx:ApprovalsResponseApi) => {
        
        const decodeInput = inter.parseTransaction({ data: tx.input, value: tx.value});

        const infoToken:tokens1Inch | undefined = allTokens?.data.tokens?.[tx.to];

        const valueAllowance = ethers.utils.formatUnits(decodeInput.args[1], infoToken?.decimals);

        const approveTx = {
            logo:infoToken?.logoURI ?? mockTokenImage,
            symbol:infoToken?.symbol ?? extraShortenAddress(tx.to),
            addressContract:tx.to,
            spender:decodeInput.args[0],
            value:+valueAllowance > 100000000000000000000 ? 'Unlimited' : valueAllowance,
            date:formatDate(+tx.timeStamp),
        }


        return approveTx;
    })
    
    return Approvals ?? [];
}

export type {ApprovalsTx}
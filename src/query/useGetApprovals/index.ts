import axios from "axios";
import { useNetwork } from 'wagmi'
import { txUserUrl } from "query/apiUrl";
import { useQuery } from "react-query";
import { ApprovalsTx } from "./type";
import { useAccount } from "wagmi";
import { convertToCorrectChains } from "utils/convertCorrectChains";
import { convertLinkImg } from "utils/convertLinkimg";
import { formatDate } from "./lib";

export const useGetApprovals = ():ApprovalsTx[] | string => {
    const {address} = useAccount();
    
    const {chain} = useNetwork()
    const chainCurrent = convertToCorrectChains(chain?.id);
    const {data } = useQuery(
        ['txUserApprove', chainCurrent, address],
        (args:any) => axios.get(txUserUrl( args.queryKey[2] ?? "", +args.queryKey[1])), {
            refetchOnWindowFocus: false,
        }
    );


    if(!data?.data) return "Loading...";
    // if(data?.data && data?.data?.result === 'Max rate limit reached, please use API Key for higher rate limit') return "Max rate limit reached!";
            
    const approvals:ApprovalsTx[] = data.data.result.map((approve:any) => ({
        logo:approve.token_logo ?? convertLinkImg(approve.contract_address),
        symbol:approve.token_symbol,
        addressContract:approve.contract_address,
        spender:approve.to_wallet,
        value:+approve.value_decimal,
        date:formatDate(approve.block_timestamp),
    }))
    .filter((token:ApprovalsTx) => +token.value > 0)

    console.log(approvals)
    return approvals;
}

export type {ApprovalsTx}
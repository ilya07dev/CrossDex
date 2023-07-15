
export interface ApprovalsResponseApi {
    "blockNumber": string,
    "timeStamp": string,
    "hash": string,
    "nonce":string,
    "blockHash": string,
    "transactionIndex": string,
    "from": string,
    "to": string,
    "value": string,
    "gas": string,
    "gasPrice": string,
    "isError": string,
    "txreceipt_status": string,
    "input": string,
    "contractAddress": string,
    "cumulativeGasUsed": string,
    "gasUsed": string,
    "confirmations": string,
    "methodId": string,
    "functionName": string
}

export interface ApprovalsTx {
    logo:string,
    symbol:string,
    addressContract:string,
    spender:string,
    value:string,
    date:string,
}
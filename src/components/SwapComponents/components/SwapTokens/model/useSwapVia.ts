import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { $choiseNetwork1, $choiseTokenSwap1 } from "../components/Amount/model/choiseToken1";
import { $choiseNetwork2, $choiseTokenSwap2 } from "../components/BottomSelect/model/choiseToken2";
import { useAccount, useNetwork, useSigner, useSwitchNetwork } from "wagmi";
import { $valueToken1 } from "../components/Amount/model/valueToken";
import { cli } from "config/blockchain";

export const useSwapVia = () => {
    const [status, setStatus] = useState("");
    const token1 = useStore($choiseTokenSwap1);
    const token2 = useStore($choiseTokenSwap2);
    const token1Value = useStore($valueToken1);
    const choiseNetwork1 = useStore($choiseNetwork1);
    const choiseNetwork2 = useStore($choiseNetwork2);
    const {chain} = useNetwork();
    const {address} = useAccount();
    const {switchNetworkAsync} = useSwitchNetwork();
    const {data:signer} = useSigner();

    const swapVia = async () => {
        if(choiseNetwork1?.chain !== chain?.id && switchNetworkAsync) {
            setStatus("Change network!")
            return await switchNetworkAsync(choiseNetwork1?.chain);
        }

        if(status === 'swap routers') {
            setStatus("Loading...");
            const pagesNum = await cli.routesPages(); // cache me!
            const baseParams = {
                fromChainId: choiseNetwork1?.chain,
                fromTokenAddress: token1?.address,
                fromAmount: +token1Value * Math.pow(10,token1?.decimals ?? 18),
                toChainId: choiseNetwork2?.chain,
                toTokenAddress: token2?.address,
                fromAddress: address, 
                multiTx: false,
                limit: 1,
            };
            const params = [...Array(pagesNum)].map(
                (_, i) => ({
                    ...baseParams,
                    offset: i+1
                })
            );
      
            const routes = await Promise.allSettled(
                params.map((i:any) => cli.getRoutes(i))
            );

            if(!routes) return;

            const firstNonEmptyPage:any = routes.find((i:any) => i.value.routes.length > 0);
            if(!firstNonEmptyPage) {
                return setStatus("Routes not found")
            }

            const route = firstNonEmptyPage?.value.routes[0];
            if(route) {
                setStatus("Routes found! Loading...");
                const routeId = route.routeId;
                const owner = address ?? "0x";
                const numAction = 0; 

                const allowanceStatus = await cli.getAllowanceStatus(
                    {owner, routeId, numAction}
                );

                const output = firstNonEmptyPage.value.routes?.[0].toTokenAmount
                console.log('<-----> output')
                console.log(output)

                if(+allowanceStatus.value < +output && signer) {
                    setStatus("Approve! Loading...");
                    const aprroveDataTx = await cli.buildApprovalTx(
                        {routeId, owner, numAction}
                    )


                    console.log(aprroveDataTx)

                    try {
                        const aprroveTx = await signer.sendTransaction(aprroveDataTx);

                        if(!aprroveTx.blockHash) {
                            return setStatus("Error")
                        }
                    } catch (error) {
                        return setStatus("Error")
                    }
                }

                setStatus("Swap! Loading...");

                const swapDataTx = await cli.buildTx(
                    {
                        routeId,
                        fromAddress:baseParams.fromAddress as string,
                        receiveAddress:baseParams.fromAddress as string,
                        numAction
                    }
                );

                console.log('<-----> tx2')
                console.log(swapDataTx);

                try{
                    const swapTx = signer && await signer.sendTransaction(swapDataTx);

                    if(swapTx?.hash) {
                        setStatus("Transaction successfully sent!")
                    }
                } catch(err) {
                    console.log(err);
                    setStatus("Error!")
                }
            }
        }

    }

    useEffect(() => {
        if(token1 && token2 && token1Value !== '') {
            if(choiseNetwork1?.chain === chain?.id) {
                setStatus(`swap routers`)
            } else {
                setStatus(`please change the network to ${choiseNetwork1?.symbol}`)
            }
        }
    }, [token1, token2, choiseNetwork1, chain, token1Value])

    return {
        swapVia,
        status
    };
}
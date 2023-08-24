import { ApprovalsTx } from "query/useGetApprovals";
import cn from "classnames";
import { imgError } from "mook/linkImg";
import { LinkIcon } from "components/Icons";
import { convertNumbers, extraShortenAddress } from "utils";
import { useRevoke } from "./model";
import { getScannerLink } from "utils/getScannerLink";
import { useNetwork } from "wagmi";

interface IProps {
    token: ApprovalsTx;
    lengthTokens:number,
    i:number,
}

export const ItemApprove = (
    {
        token,
        lengthTokens,
        i
    }:IProps
) => {

  const revoke = useRevoke();
  const {chain} = useNetwork()
  const linkScanner = getScannerLink(chain?.id ?? 1);

  return(
    <div
                  key={token.date + token.logo}
                  className={cn(
                    "itemApprove flex justify-between items-center",
                    "mt-3 3xl:mt-5 py-[16.7px] sm:py-4 3xl:py-5 px-[25px] gap-4 2xl:gap-5",
                    "text-[15px] sm:text-xl 3xl:text-[25px]",
                    "font-semibold text-center leading-[100%] 3xl:leading-[120%]",
                    "w-full bg-c-primary rounded-r-primary",
                    i === 0 && "z-[3] relative",
                    lengthTokens &&
                      i === lengthTokens - 1 &&
                      "z-[3] relative"
                  )}
                >
                  <td className="w-full flex items-center gap-[10px] sm:gap-[15px]">
                    <img
                      className="w-[30px] sm:w-10 h-[30px] sm:h-10 3xl:w-[50px] 3xl:h-[50px] rounded-full"
                      src={token.logo}
                      onError={(img) => imgError(img)}
                      alt=""
                    />
                    <span className="ml-[10px] sm:ml-0">{token.symbol}</span>
                    <LinkIcon
                      to={`${linkScanner}address/${token.addressContract}`}
                    />
                  </td>
                  <td
                    className={cn(
                      "w-full flex items-center justify-center text-center",
                      "gap-[10px] sm:gap-[15px] mx-auto self-center"
                    )}
                  >
                    <span className="">{extraShortenAddress(token.spender)}</span>
                    <LinkIcon to={`${linkScanner}address/${token.spender}`} />
                  </td>
                  <td className="w-full">{+token.value > 10000000000000000 ? "Unlimited" : convertNumbers(token.value)}</td>
                  <td className="w-full">{token.date}</td>
                  <td className="sm:w-full">
                    <button
                      className={cn(
                        "block w-fit ml-auto py-[13.2px] px-5 sm:px-12",
                        "rounded-r-secondary border-2 border-[#7BE9A5]",
                        "animated-button font-semibold leading-[100%] 3xl:leading-[114%]"
                      )}
                      onClick={revoke(token.addressContract, token.spender)}
                    >
                      <span className="relative z-[1]">Revoke</span>
                    </button>
                  </td>
                </div>
  )
}
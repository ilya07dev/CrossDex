import { SearchStatus, useSearchTokens } from "hooks/searchTokens"
import { changeTokenMarket } from "../model"
import cn from "classnames";
import { convertLinkImg } from "utils/convertLinkimg";
import { searchToken } from "query/useSearchToken";
import { convertNumbers } from "utils";
import { convertChain } from "utils/convertChain";
import { imgError } from "mook/linkImg";
import { Loading, LoadingStatus } from "UI/Loading";
import { chainQuery } from "config/stateChain";


export const SearchMarket = () => {
    
    const {inputSearch, choseToken, dropDown, onSetToken, tokens, statusSearch} = useSearchTokens(changeTokenMarket)
    
    return (
        <div
            ref={dropDown.dropdownRef}
            className={cn(
            "relative h-fit w-full rounded-r-accent gap-[31px] flex",
            )}
        >
            {choseToken.token && 
            <div
                className={cn(
                "flex items-center gap-[10px] sm:gap-[15px]",
                "text-[15px] sm:text-[30px] text-white font-medium"
                )}
            >
                <img
                src={convertLinkImg(choseToken.token?.address)}
                className={cn(
                    "w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full"
                )}
                onError={(img) => imgError(img)}
                />
                {choseToken.token?.baseTokenSymbol}
            </div>
            }
            <input
            onClick={dropDown.toggle}
            placeholder="Search"
            className={cn(
                "flex-1 w-full px-[18px] py-[11.5px] sm:py-[13.5px] sm:p-[18px]",
                "outline-none bg-c-primary rounded-[15px] sm:rounded-r-secondary",
                "text-[15px] sm:text-xl text-[#9B9898] placeholder:text-[#9B9898] font-medium",
                "duration-500 focus:shadow-[#fff] shadow-sm relative z-[21]"
            )}
            type="text"
            onSelect={dropDown.open}
            value={inputSearch.value}
            onChange={(el) => inputSearch.setValue(el.target.value)}
            />
            <aside
            style={{ zIndex: 20 }}
            className={cn(
                "w100%",
                "flex flex-col bg-c-secondary rounded-b-r-primary duration-500",
                "absolute right-0 pt-5 pb-[10px] z-[20]",
                "max-h-[460px] overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thumb-[#37383D] scrollbar-track-transparent custom_scroll",
                dropDown.isOpen
                ? "scale-y-1 top-[40px] opacity-[1]"
                : "scale-y-0 top-[-103px] opacity-0"
            )}
            >

            <div
                className="p-[30px]"
            >
                {statusSearch === SearchStatus.SEARCH && !(tokens.length > 0) &&
                    <Loading status={LoadingStatus.LOADING} />
                }

                {statusSearch === SearchStatus.NOT_DATA && !(tokens.length > 0) &&
                    <Loading status={LoadingStatus.NO_DATA} />
                }
            </div>
            
            {tokens.map((el: searchToken,) => (
                    <button 
                        className="flex items-center gap-[15px] pl-[26px] py-[10px] cursor-pointer" 
                        style={{justifyContent: "space-between", paddingRight: "10px"}}
                        onClick={onSetToken(el, false)}
                    >
                        <div style={{display: "flex", gap: "20px"}}>
                        <img 
                            src={convertLinkImg( el.baseToken)} 
                            className="w-8 h-8 aspect-square"
                            onError={(img) => imgError(img)}
                            style={{background: "rgb(223, 221, 211)"}}
                        />
                        <img 
                            src={convertLinkImg( el.quoteToken)}
                            onError={(img) => imgError(img)}
                            className="ml-2 w-8 h-8 aspect-square" 
                            style={{position: "absolute", left: "40px", background: "rgb(223, 221, 211)"}}
                        />
                        <img 
                            src={`https://chain-icons.s3.amazonaws.com/${convertChain(+el.chainId, true)}.png`}
                            onError={(img) => imgError(img)}className="ml-2 w-5 h-5 aspect-square" 
                            style={{position: "absolute", left: "60px", marginTop: "10px"}}
                        />
                        <p className="ml-4 text-xl">
                            <span className="uppercase text-white text-xl">{el.baseTokenSymbol}</span>
                            <span className="uppercase text-white text-xl">/{el.quoteTokenSymbol}</span>
                        </p>
                        </div>
                        {/* @ts-ignore */}
                        <p className="ml-3 text-l text-white">Chain: {chainQuery[el.chainId].nativeCurrency.symbol}</p>
                        <p className="ml-3 text-l text-white">Liquidity: {convertNumbers(el.liquidity)}</p>
                    </button>
            ))}
            </aside>
        </div>
    )
}
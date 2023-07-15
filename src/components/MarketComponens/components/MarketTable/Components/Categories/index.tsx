
import cn from "classnames";
import {Categorie} from "./categorie";
import { useGetInfoTrends } from "./model/getInfoTrends";
import { useGetTops } from "query/useGetTop";
import { marketLoosersUrl, marketGainersUrl } from "query/apiUrl";

export const Categories = () => {
    const trendsData = useGetInfoTrends();
    const loosers = useGetTops("loosers",marketLoosersUrl);
    const gainers = useGetTops("gainers",marketGainersUrl);

    return(
        <div
            className={cn(
            "w-full flex flex-col sm:flex-row",
            "gap-[15px] sm:gap-5 3xl:gap-[30px] sm:pr-[10px]"
            )}
        >
            <Categorie 
                className="w-full" 
                title="Loosers"
                tokens={loosers}
            />
            <Categorie 
                className="w-full" 
                title="Gainers"
                tokens={gainers}
            />
            <Categorie 
                className="w-full" 
                title="Trends"
                tokens={trendsData}
            />
        </div>
    )
}
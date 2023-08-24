
import { images } from "assets/img";
import cn from "classnames";

export enum LoadingStatus {
    LOADING = "LOADING",
    NO_DATA = "NO_DATA"
}

interface LoadingProps {
    status:LoadingStatus,
}

export const Loading = ({status}:LoadingProps ) => {

    return(
        <div
            className={cn(
            "flex-1 my-auto w-[calc(100vw-30px)] sm:w-full",
            "flex flex-col gap-5 justify-center items-center"
            // className
            )}
        >
            <span className="text-center text-[36px] sm:text-[50px] text-white">
            {status === LoadingStatus.LOADING ? 
                "Loading..."
                :
                "No Data Yet"
            }
            </span>
            <img className="w-[200px] h-[200px]" src={status === LoadingStatus.LOADING ? images.loader : images.no_data} alt="" />
        </div>
    )
}

interface NotDataI{
    data:any;
}


export const NotData = ({data}:NotDataI) => {
    let title = 'Loading...'

    if(data && title?.length < 1) {
        title="There's no data!"
    } else title=""

    return <h1>{title}</h1>;
}
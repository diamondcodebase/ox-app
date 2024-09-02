export default function CustomButton({btnLabel, onClickFn, hrefLink}){
    if(hrefLink !== null && hrefLink != ""){
        return (
            <button className="text-3xl bg-indigo-900 border-indigo-500 border-4 rounded-md p-4 m-4">
                <a href={hrefLink}>
                    <span className="text-indigo-200">{btnLabel}</span>
                </a>
            </button>
        )
    }
    return (
        <button className="text-3xl bg-indigo-900 border-indigo-500 border-4 rounded-md p-4 m-4" onClick={onClickFn}>
            <span className="text-indigo-200">{btnLabel}</span>
        </button>
    );
}
export default function CustomButtonV({btnLabel, onClickFn, visible}){
    if(visible){
        return (
            <button className="text-3xl bg-indigo-900 border-indigo-500 border-4 rounded-md p-4 m-4" onClick={onClickFn}>
                <span className="text-indigo-200">{btnLabel}</span>
            </button>
        );
    }
    return (<></>);
}
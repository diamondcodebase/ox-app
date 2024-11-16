import { motion } from 'framer-motion';

export default function CustomButton({btnLabel, onClickFn, hrefLink}){
    if(hrefLink !== null && hrefLink != ""){
        return (
            <motion.button whileTap={{ scale: 0.85 }} className="text-3xl bg-gray-500 border-gray-300 border-4 rounded-md p-4 m-4">
                <a href={hrefLink}>
                    <span className="text-gray-200">{btnLabel}</span>
                </a>
            </motion.button>
        )
    }
    return (
        <motion.button whileTap={{ scale: 0.85 }} className="text-3xl bg-gray-500 border-gray-300 border-4 rounded-md p-4 m-4" onClick={onClickFn}>
            <span className="text-gray-200">{btnLabel}</span>
        </motion.button>
    );
}
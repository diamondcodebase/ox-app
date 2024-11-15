import { motion } from "framer-motion";

function Mainpg() {
    return (
        <div className="pg-heading">
            <motion.h2
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 60
                }} className='heading'>Medium <span className='comp'> Company</span></motion.h2>
            <motion.h7 initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 60
                }} className='sub'>We provide Solutions for your Problems</motion.h7>
            <motion.img initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 60
                }} src="Group 5.png" alt="Astro-papi" className="astro" />
            <motion.button initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 60
                }} type="button" className='get-started' value='Get Started' ><a href="#about" style={{ textDecoration: 'none', color: "black" }}>Get started</a></motion.button>

        </div>

    )
}
export default Mainpg

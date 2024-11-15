import { motion } from "framer-motion"
function Team2() {
    return (
        <div className="ourteam1">
            <motion.div initial={{ opacity: 0, scale: 0, x: -500 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6 }} viewport={{ once: true }} class="card-team1" style={{ width: '18rem' }}>
                <div class="card-body">
                    <motion.h5 initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }} viewport={{ once: true }} class="card-title2">Rohith Sharma</motion.h5>
                    <motion.h6 initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }} viewport={{ once: true }} class="card-subtitle2 mb-2 text-muted">UI/UX developer, Software Developer </motion.h6>
                    <motion.p initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.3 }} viewport={{ once: true }} class="card-text2">Combining expertise in UI/UX design and software development to create intuitive and visually appealing digital solutions. Bridging the gap between design and code.<br />
                        <img src="Saly-17 1.png" alt="sally" className="sally2" />
                    </motion.p>

                </div>
            </motion.div>

        </div>
    )
}
export default Team2
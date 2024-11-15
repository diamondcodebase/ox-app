import { motion } from "framer-motion"
function Team() {
    return (
        <div className="ourteam">
            <motion.h1 initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }} viewport={{ once: true }} className="team" id='team'>Our <span>Team</span></motion.h1>
            <motion.div initial={{ opacity: 0, scale: 0, x: 500 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, }} viewport={{ once: true }} class="card-team" style={{ width: '18rem' }}>
                <div class="card-body">
                    <motion.h5 initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }} viewport={{ once: true }} class="card-title1">Harsha Srinivas</motion.h5>
                    <motion.h6 initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }} viewport={{ once: true }} class="card-subtitle1 mb-2 text-muted">Web developer, UI/UX design </motion.h6>
                    <motion.p initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.3 }} viewport={{ once: true }} class="card-text1">Crafting captivating digital experiences through visually stunning interfaces and user-centric design, bridging the gap between aesthetics and functionality. <br />
                        <img src="Saly-11 1.png" alt="sally" className="sally" />
                    </motion.p>

                </div>
            </motion.div>

        </div>
    )
}
export default Team
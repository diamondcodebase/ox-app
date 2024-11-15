import { motion } from "framer-motion"
function Team3() {
    return (
        <div className="ourteam3">
            <motion.div initial={{ opacity: 0, scale: 0, x: 500 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6 }} viewport={{ once: true }} class="card-team3" style={{ width: '18rem' }}>
                <div class="card-body">
                    <motion.h5 initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }} viewport={{ once: true }} class="card-title3">Nagaraj </motion.h5>
                    <motion.h6 initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }} viewport={{ once: true }} class="card-subtitle3 mb-2 text-muted">AWS developer,Backend developer </motion.h6>
                    <motion.p initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.3 }} viewport={{ once: true }} class="card-text3">Leveraging AWS infrastructure and expertise in backend development to build scalable and efficient solutions. I architect robust backends.<br />
                        <img src="Saly-16.png" alt="sally" className="sally3" />
                    </motion.p>

                </div>
            </motion.div>

        </div>
    )
}
export default Team3
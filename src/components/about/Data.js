import { motion } from "framer-motion"
function Data() {
    return (
        <><motion.div initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }} className="our-heading">
            Our <span>Data</span>
        </motion.div>< motion.div initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }} className="single">
                <div className="card1" style={{ width: '70rem', height: '20rem' }}>
                    <div class="card-body">
                        <h1 className="projects">4+</h1>
                        <p className="prjct">Projects</p>
                        <div className="line"></div>
                        <h1 className="clients">10+</h1>
                        <p className="clint">Clients</p>
                        <div className="line2"></div>
                        <h1 className="reviews">100%</h1>
                        <p className="rvws">Reviews</p>
                        <div className="line3"></div>

                    </div>
                </div>

            </motion.div>
        </>
    )
}
export default Data
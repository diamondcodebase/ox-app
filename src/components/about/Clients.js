import { motion } from "framer-motion"
function Clients() {
    return (
        <><motion.div initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }} className="clnt-heading">
            Our <span>Clients</span>
        </motion.div> <motion.img initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }} viewport={{ once: true }} src="Indian Man.png" alt="" className="avatar" style={{ zIndex: 0 }} />
            <motion.img initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }} viewport={{ once: true }} src="Black Man.png" alt="" className="avatar1" style={{ zIndex: 0 }} />
            <motion.img initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }} viewport={{ once: true }} src="College Student.png" alt="" className="avatar2" style={{ zIndex: 0 }} />
            <div className="clnt-cards">

                <div class="card11" style={{ width: '18rem' }}>
                    <div class="card-body1">
                        <motion.h5 initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9 }} viewport={{ once: true }} class="card-title">Hemanth</motion.h5 >
                        <motion.img initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} viewport={{ once: true }} src="Group 13.png" alt="" className="star" />

                        <hr />
                        <motion.p initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.3 }} viewport={{ once: true }} class="card-text">"Taras Company exceeded our expectations. They transformed our vision into a beautifully designed website that reflects our brand perfectly. Highly recommended for their attention to detail and seamless user experience."</motion.p>

                    </div>
                </div>
                <div class="card2" style={{ width: '18rem' }}>
                    <div class="card-body1">
                        <motion.h5 initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9 }} viewport={{ once: true }} class="card-title">Shashank</motion.h5 >
                        <motion.img initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} viewport={{ once: true }} src="Group 13.png" alt="" className="star1" /><hr />
                        <motion.p initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.3 }} viewport={{ once: true }} class="card-text">"Working with Taras Company was a breeze. They delivered a user-friendly and visually appealing website ahead of schedule. Excellent communication and technical expertise."</motion.p>

                    </div>
                </div>
                <div class="card3" style={{ width: '18rem' }}>
                    <div class="card-body1">
                        <motion.h5 initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9 }} viewport={{ once: true }} class="card-title">Ramesh</motion.h5 >
                        <motion.img initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} viewport={{ once: true }} src="Group 13.png" alt="" className="star2" /><hr />
                        <motion.p initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.3 }} viewport={{ once: true }} class="card-text">"Taras Company provided an exceptional experience. Their professionalism and attention to detail resulted in a stunning website that perfectly captured our brand. Highly recommended!"</motion.p>

                    </div>
                </div>

            </div></>
    )
}
export default Clients
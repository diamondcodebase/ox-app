import { motion } from "framer-motion"
function Service() {
    return (
        <div className='main1'>
            <motion.h1 initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }} viewport={{ once: true }} className='service-head' id='service' style={{ zIndex: 0 }}>Our <span>services</span></motion.h1>
            < motion.div initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }} viewport={{ once: true }} className="servece-slide">

                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" id='service'>
                            <img src="Rectanglemon.png" alt="" className="monitor" />
                            <div className="subcomp"> <h1 className='slide1'>Web Development</h1>
                                <p className='para1'>At Taras Company, we specialize in creating customized web solutions that drive online success. Our expert team utilizes cutting-edge technologies to develop user-friendly, responsive websites. With a focus on quality and timely delivery, we seamlessly integrate functionality and prioritize user experience. Partner with us for powerful, tailored web development services.
                                </p></div>

                        </div>
                        <div class="carousel-item">
                            <img src="Saly-1 10.png" alt="" className="monitor1" />
                            <div className="subcomp"> <h1 className='slide1' style={{ display: 'inline' }}>Robotics Solutions</h1>
                                <p className='para1'>At Taras Company, we offer state-of-the-art robotics software solutions to help businesses leverage the power of automation. Our expertise lies in developing advanced software systems that enable robots to perform complex tasks with precision and efficiency.
                                </p></div>
                        </div>
                        <div class="carousel-item">
                            <img src="Saly-12.png" alt="" className="monitor-app" />
                            <div className="subcomp"> <h1 className='slide1'>App Development</h1>
                                <p className='para1'>At Taras Company, we specialize in creating exceptional mobile applications that cater to your unique business needs. Our expert team combines innovative design with robust development to deliver user-friendly and feature-rich apps for iOS and Android platforms.
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="Rectangle1.png" alt="" className="monitor" />
                            <div className="subcomp" style={{ display: "inline-block" }}> <h1 className='slide1'>Excel Services</h1>
                                <p className='para1'>At Taras Company, we specialize in creating exceptional mobile applications that cater to your unique business needs. Our expert team combines innovative design with robust development to deliver user-friendly and feature-rich apps for iOS and Android platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">

                        <img src="🦆 icon _chevron right_.png" alt="" className="arrow-rgt" />
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <img src="Vector.png" alt="" className="arrow-rgt" />

                    </button>
                </div>
            </motion.div>
        </div>
    )
}
export default Service
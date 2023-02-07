import { avatar } from "../assets";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <section id="home" className="flex min-h-[85vh] items-center lg:min-h-[78vh]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:justify-between lg:gap-x-12">
          {/* text */}
          <div className="text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="text-[3.5rem] font-bold leading-[0.8] lg:text-8xl"
            >
              DAMAR <span>MURTI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="leading-[1 mb-6 font-secondary text-3xl font-semibold uppercase lg:text-5xl"
            >
              <h2>
                I am a <span className="text-accent">Frontend Developer</span>
              </h2>
            </motion.div>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="mx-auto mb-8 max-w-lg lg:mx-0"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae itaque velit soluta quasi quo corporis
              officiis facilis temporibus nesciunt dolorem magnam necessitatibus, consectetur dignissimos iusto incidunt
              blanditiis nulla placeat laboriosam.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="mx-auto mb-12 flex max-w-max items-center gap-x-6 lg:mx-0"
            >
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="mx-auto flex max-w-max gap-x-6 text-[1.25rem] lg:mx-0"
            >
              <a href="https://github.com/damarbm30">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/damar-murti">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/damar_murti">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mx-auto hidden max-w-[320px] flex-1 lg:flex lg:max-w-[482px]"
          >
            <img src={avatar} alt="avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Home;

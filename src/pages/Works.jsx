import { motion } from "framer-motion";
import { cryptoverse, tanyaKiai } from "../assets";
import { fadeIn } from "../variants";

const Works = () => {
  return (
    <section id="works" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-10 lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mb-10 flex flex-1 flex-col justify-center gap-y-12 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 font-bold leading-tight text-accent">
                My Latest <br /> Work
              </h2>
              <p className="mb-10 max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis facere id rem, sapiente
                omnis animi accusantium sed suscipit. Vero reprehenderit facilis voluptas consequuntur qui similique
                perferendis perspiciatis ab ex?
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-10"
          >
            {/* image */}
            <div className="group relative overflow-hidden rounded-xl border-2 border-white/50">
              {/* overlay */}
              <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70" />
              {/* img */}
              <img className="transition-all duration-500 group-hover:scale-125" src={tanyaKiai} alt="tanya-kiai" />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient">React JS</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                <span className="text-3xl text-white">Tanya Kiai</span>
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden rounded-xl border-2 border-white/50">
              {/* overlay */}
              <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70" />
              {/* img */}
              <img className="transition-all duration-500 group-hover:scale-125" src={cryptoverse} alt="cryptoverse" />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
                <span className="text-gradient">React JS</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
                <span className="text-3xl text-white">Cryptoverse</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Works;

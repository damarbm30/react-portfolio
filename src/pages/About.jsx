import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex h-screen flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="h-[640px] flex-1 bg-about bg-contain bg-top bg-no-repeat mix-blend-lighten"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 font-bold text-accent">About Me</h2>
            <h3 className="h3 mb-4">I'm a Junior Frontend Developer with 1 year of experiences</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus voluptates molestias necessitatibus nulla,
              corrupti fuga obcaecati consequatur qui. Eligendi porro deleniti asperiores non at, voluptatem repellat
              iusto nam placeat ullam.
            </p>
            {/* stats */}
            <div className="mb-12 flex gap-x-6 lg:gap-x-10">
              <div>
                <div className="text-gradient mb-2 font-tertiary text-[40px]">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : ""}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Year of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-gradient mb-2 font-tertiary text-[40px]">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : ""}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-gradient mb-2 font-tertiary text-[40px]">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : ""}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Clients <br /> Serviced
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex min-h-screen flex-col items-center justify-center gap-y-10 lg:flex-row lg:gap-x-20 lg:gap-y-0">
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <h2 className="h2 font-bold text-accent">About Me</h2>
              <h3 className="h3 mb-4">
                I'm a Junior Frontend Developer with 1 year of experiences
              </h3>
              <p className="mb-6">
                Hello, I'm Damar, a junior web developer with a passion for
                design and technology. I have 1 year of experience in frontend
                development. I enjoy taking on new projects and pushing my
                creative boundaries to create innovative and unique solutions
                for my clients. I look forward to working with you on your next
                project and bringing your vision to life. 
              </p>
              {/* stats */}
              <div className="mb-12 flex gap-x-6 lg:gap-x-10">
                <div>
                  <div className="text-gradient mb-2 py-2 font-tertiary text-[40px] lg:py-0">
                    {inView ? <CountUp start={0} end={1} duration={3} /> : ""}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Year of <br /> Experience
                  </div>
                </div>
                <div>
                  <div className="text-gradient mb-2 py-2 font-tertiary text-[40px] lg:py-0">
                    {inView ? <CountUp start={0} end={3} duration={3} /> : ""}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Projects <br /> Completed
                  </div>
                </div>
                <div>
                  <div className="text-gradient mb-2 py-2 font-tertiary text-[40px] lg:py-0">
                    {inView ? <CountUp start={0} end={2} duration={3} /> : ""}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Clients <br /> Serviced
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="hidden h-[640px] flex-1 bg-about bg-contain bg-top bg-no-repeat mix-blend-lighten lg:flex lg:max-w-[482px]"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;

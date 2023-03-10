import { motion } from "framer-motion";
import { works } from "../../utils/works";
import { fadeIn } from "../../variants";
import WorkItem from "./WorkItem";

const Works = () => {
  return (
    <section id="works" className="section overflow-auto">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center gap-8">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-col justify-center">
              <h2 className="h2 text-center font-bold leading-tight text-accent">
                My Latest <br /> Work
              </h2>
              <p className="mx-auto w-2/4 text-center lg:mb-10">
                Welcome to my latest website works! In this section of my
                portfolio, you will find a collection of my most recent and
                notable website design projects. Each website has been created
                with the unique needs of the client in mind. I am constantly
                seeking new ways to innovate and push the boundaries of web
                design, and I am excited to share my latest works with you.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-2 xl:grid-cols-3"
          >
            {works.map((work) => {
              const { id, pretitle, name, img, url } = work || {};

              return (
                <WorkItem
                  key={id}
                  pretitle={pretitle}
                  name={name}
                  img={img}
                  url={url}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Works;

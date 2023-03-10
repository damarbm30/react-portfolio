import { motion } from "framer-motion";
import { works } from "../../utils/works";
import { fadeIn } from "../../variants";
import WorkItem from "./WorkItem";

const Works = () => {
  return (
    <section id="works" className="section overflow-auto">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mb-10 flex flex-col justify-center gap-y-12 lg:mb-0"
          >
            <div className="flex flex-col justify-center">
              <h2 className="h2 text-center font-bold leading-tight text-accent">
                My Latest <br /> Work
              </h2>
              <p className="mx-auto mb-10 w-3/4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                blanditiis facere id rem, sapiente omnis animi accusantium sed
                suscipit. Vero reprehenderit facilis voluptas consequuntur qui
                similique perferendis perspiciatis ab ex?
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 gap-12 max-xl:grid-cols-3 lg:grid-cols-3"
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

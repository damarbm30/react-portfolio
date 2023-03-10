import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section id="contact" className="lg:section py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 items-center justify-start"
          >
            <div>
              <h4 className="mb-2 text-xl font-bold uppercase tracking-wide text-accent">
                Get in touch
              </h4>
              <h2 className="mb-12 text-5xl leading-none lg:text-8xl">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-1 flex-col items-start gap-y-6 rounded-2xl border p-6 pb-24"
          >
            <input
              className="w-full border-b bg-transparent py-3 outline-none transition-all placeholder:text-white focus:border-accent"
              type="text"
              placeholder="Your name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="font-bold text-red-700">
                Please fill in your name!
              </span>
            )}
            <input
              className="w-full border-b bg-transparent py-3 outline-none transition-all placeholder:text-white focus:border-accent"
              type="text"
              placeholder="Your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="font-bold text-red-700">
                Please fill in your e-mail correctly!
              </span>
            )}
            <textarea
              className="mb-12 w-full resize-none border-b bg-transparent py-12 outline-none transition-all placeholder:text-white focus:border-accent"
              placeholder="Your message"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="font-bold text-red-700">
                Please fill the message box!
              </span>
            )}
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;

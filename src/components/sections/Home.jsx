import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative pl-4 md:pl-25 md:pr-25 pr-4 pt-15 md:pt-1"
    >
   
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 items-center justify-center">
        <h1 className="text-4xl md:text-4xl  font-bold mb-6 py-1 bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent leading-right">
          Hi, I'm Gugulethu Nkabinde -
          <br />
           A Multimedia Creative
        </h1>

        <p className="text-black text-lg mb-8">
          Frontend Developer. Graphic Designer. Visual Storyteller.
        </p>
        {/* SOCIAL ICONS */}
        <div className="flex justify-center md:justify-start space-x-4 mb-6">
          <a 
            href="https://github.com/Gugulethu72"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-orange-500 text-2xl"
            >
              <FaGithub />
          </a>

          <a 
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-orange-500 text-2xl"
          >
              <FaLinkedin />
          </a>
        </div>
        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a 
          href="#projects"
          className="bg-black text-orange-200 py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >View Projects</a>

          <a 
          href="#contact"
          className=" text-black border border-black py-3 px-6 rounded-full font-medium transition-all duration-200
          hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130,246,0.2)]"
          >
            Contact Me
          </a>

          <a
            href="/src/assets/CV - GUGULETHU NKABINDE ICenter.pdf"
            target="_blank"
            className="bg-black text-orange-200 py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Download My CV
          </a>
        </div>
      </div>


      <div className="md:w-1/2 flex justify-center pb-5 md:pb-0"> 
      
        <img src="./src/assets/IMG_9116.svg" alt="Gugulethu Nkabinde"
        className="w-[100px] h-[100px] md:w-[300px] md:h-[400px] object-cover rounded-xl" />
        </div>
    </section>
  );
};
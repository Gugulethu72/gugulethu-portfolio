
export const About = () => {
  

  return(
    <section
      id="about" 
      className="min-h-screen  items-center justify-center py-20 bg-orange-50 "
      >

        <div>
          <h2 className="text-3xl font-bold mb-8 text-black text-center">
            {" "}
             About <span className="text-orange-500"> Me </span>  
          </h2>
        </div>

        <div className=" flex flex-col md:flex-row px-4">   
          <div className=" md:w-1/2 text-center rounded-xl p-8 border-black border hover:-translate-y-1 transition-all items-center justify-start">
            <p className="text-black mb-6">
              Hi, I'm Gugulethu Nkabinde — a final-year Multimedia Computing student at Tshwane University of Technology, majoring in Computer Science. I'm passionate about combining technology, design, and storytelling to craft engaging digital experiences.
              My expertise spans Front-End Development, Graphic Design, Videography, and Content Creation. I specialize in building clean, responsive UIs with React and Tailwind CSS, and I have hands-on experience in photo/video production, editing, and branding.
              I also co-manage Splash TV, a growing YouTube channel with over 1,000 subscribers, where I produce, film, edit, and manage content strategy alongside my partner.
              I thrive in creative spaces where design meets code, and where visuals drive emotion and impact.
            </p>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
             <h3 className="text-xl font-bold mb-4">Education</h3>
             <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong> Dip in Multimedia Computing </strong> - Tshwane University of Technology
                    (2021 - 2025)
                  </li>
                  <li>
                    Relevant Coursework: Web Development, 3D Modeling, 
                  </li>
             </ul>
            </div>

         
        </div>


    </section>
  );
};
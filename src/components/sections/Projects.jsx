import { useState } from "react";
import { cn } from "../lib/utils";

const myProjects = [
    //Frontend
    {
      title: "Landing Page",
      description: "Responsive website",
      tools: "React Tailwind",
      image: "/src/assets/IMG_9116.svg",
      link: "#",
      category: "front-End Development"
    },
    {
      title: "Portfolio Website",
      description: "Responsive website",
      tools: "React Tailwind",
      image: "/src/assets/IMG_9116.svg",
      link: "#",
      category: "front-End Development"
    },
    {
      title: "Landing Page",
      description: "Responsive website",
      tools: "React Tailwind",
      image: "/src/assets/IMG_9116.svg",
      link: "#",
      category: "front-End Development"
    },

    //Posters
    {
      title: "Ndebele Event",
      description: "Poster Design",
      image: "/src/assets/Ndebele-Friday-NSA-23.jpg",
      category: "design & ui/ux"
    },
    {
      title: "Ndebele Event",
      description: "Poster Design",
      image: "/src/assets/Ndebele-Friday-NSA-23.jpg",
      category: "design & ui/ux"
    },
    {
      title: "Ndebele Event",
      description: "Poster Design",
      image: "/src/assets/Ndebele-Friday-NSA-23.jpg",
      category: "design & ui/ux"
    },

    
    //Media-Production
    {
      title: "Photography",
      description: "Portrait Photography",
      image:"/src/assets/Fresh-Fit-Wednesday-16TH.jpg",
      category: "media-Production"
    },
    {
      title: "Splash TV Brand Promo",
      description: "YouTube Channel",
      image: "/src/assets/Fresh-Fit-Wednesday-16TH.jpg",
      category: "media-Production"
    },
    {
      title: "Video Production",
      description: "Production",
      image: "/src/assets/Fresh-Fit-Wednesday-16TH.jpg",
      category: "media-Production"
    },{
      title: "Video Production",
      description: "Production",
      image: "/src/assets/Fresh-Fit-Wednesday-16TH.jpg",
      category: "media-Production"
    },

];

const categories = ["front-End Development","design & ui/ux","media-Production"];

export const Projects = () => {

  const [activeCategory, setActiveCategory] = useState("front-End Development");

  const filteredProjects = myProjects.filter(
    (myProjects) => myProjects.category === activeCategory
  );

  return(
    <section
      id="projects" 
      className="min-h-sceen items-center justify-center py-20 bg-orange-50"
      >
        <div 
          className="container mx-auto max-w-5xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
             <span className="text-primary"> Projects</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}>
                  {category}
              </button>
            ))}
          </div>

          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((myProjects, key)=>(
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div
                  className="h-48 overflow-hidden"
                >
                  <img src={myProjects.image} alt={myProjects.description} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <img src="../../assets/Fresh-Fit-Wednesday-16TH.jpg" alt="" />
              </div>
            ))}
          </div>

        </div>
    </section>
  );
};
import { useState } from "react";
import { cn } from "../../components/lib/utils";
const mySkills = [

  // Front-End Development
  { name: "HTML/CSS", category: "front-end Development"},
  { name: "JavaScript", category: "front-end Development"},
  { name: "React", category: "front-end Development"},
  { name: "Tailwind CSS", category: "front-end Development"},
  { name: "Vite", category: "front-end Development"},

  //Tools
  { name: "Visual Studio Code", category: "Tools"},
  { name: "Git & GitHub", category: "Tools"},
  { name: "Figma", category: "Tools"},
  { name: "Adobe Illustrator", category: "Tools"},
  { name: "Adobe Photoshop",  category: "Tools"},
  { name: "Adobe Premiere Pro", category: "Tools"},
  { name: "After Effects", category: "Tools"},
  { name: "After Lightroom", category: "Tools"},
  { name: "After Media Encoder", category: "Tools"},
  { name: "Davinvi Resolve", category: "Tools"},

  //Content Creation & Media Production
  { name: "Photography", category: "media-Production"},
  { name: "Video Editing", category: "media-Production"},
  { name: "Content Creation",platform: "YouTube(Splash TV)" ,role: "Filming, Editing, Scheduling, Managing Social Content", category: "media-Production"},

  //UI/UX Design
  { name: "UL/UX Design", category: "design & ui/ux"},
  { name: "Graphic Design", category: "design & ui/ux"},
  { name: "Logo Design", category: "design & ui/ux"},
  //OTHER
  {name: "3D Modeling", category: "other"}


];

const categories = ["front-end Development","Tools","media-Production","design & ui/ux","other"];

export const Skills =()=>{
  
  const [activeCategory, setActiveCategory] = useState("front-end Development");

  const filteredSkills = mySkills.filter(
    (mySkills) => mySkills.category === activeCategory
  );

  return(
    <section
     id="skills"
     className="min-h-screen items-center justify-center py-20 bg-orange-100"
     >
      <div 
        className="container mx-auto max-w-5xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
          
        <div
         className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)} 
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((mySkills, key) => (
            <div
              key={key} 
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >

              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {mySkills.name} </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
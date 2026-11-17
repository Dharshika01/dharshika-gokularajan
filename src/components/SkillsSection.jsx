import { useState } from "react";
import { cn } from "../lib/utils";


const skills = [
    //Technical skills 
    {name:" HTML/CSS", level:80, category:"Technical Skills"},
    {name:" React", level:50, category:"Technical Skills"},
    {name:"Java", level:65, category:"Technical Skills"},
    {name:"Python", level:65, category:"Technical Skills"},
    {name:"Data analysis", level:60, category:"Technical Skills"},
    {name:"Flutter", level:55, category:"Technical Skills"},
    
     //Soft Skills 
     {name:"Communication", level:80, category:"Soft Skills"},
     {name:"Teamwork", level:80, category:"Soft Skills"},
     {name:"Adaptability", level:90, category:"Soft Skills"},
     {name:"Problem solving ", level:85, category:"Soft Skills"},

     //Marketing Skills 
     {name:"Lead Generation", level:70, category:"Marketing Skills"},
     {name:"Content Marketing", level:60, category:"Marketing Skills"},
     {name:"Paid Advertising", level:70, category:"Marketing Skills"},
     {name:"Performance Marketing", level:50, category:"Marketing Skills"},
];
   const categories =["All","Technical Skills", "Soft Skills","Marketing Skills"]

   export const SkillsSection = () => {
    const [activeCategory, setActiveCategory]= useState ("All");
    const filteredSkills = skills.filter((skill)=> activeCategory ==="All" || skill.category === activeCategory)
   return <section id ="skills"
     className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className = "text-primary"> Skills </span>
           </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
             {categories.map((category,key) => (
                <button key={key}
                 onClick = {() => setActiveCategory(category)}
                 className={cn("px-5 py-2 rounded-full transition-colors duration-300 captalize",
                   activeCategory === category ? "bg-primary text-primar.y-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary" 
                 )}> {category}</button>
             ))}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredSkills.map((skill,key) =>(
                 <div key ={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    <div className ="text-left mb-4"> 
                       <h3 className ="font-semibold text-lg"> {skill.name}</h3></div>
                       <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"> 
                       <div  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                       style ={{width:skill.level +"%"}}/>
                       </div>
                     </div>
               ))}
            </div>
        </div>
     </section>
}
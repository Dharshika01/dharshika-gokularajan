import {ArrowRight} from "lucide-react";

const fprojects = [
    {id :1,
     title :"Airea",
     description :"IoT based Lung Cancer Monitoring System",
     image: "/Project/Airea_image.jpg",
     tags:["Flutter","Spring Boot", "PostgreSQL"],
     },
     {id :2 ,
     title :" Weather App",
     description :"Creating Weather App using React framework",
     image: "/Project/Weather-app.png",
     tags:["React","CSS","OpenWeatherMap API"],
     },
];



export const ProjectsSection = () => {
    return (
    <section id='projects' className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">Projects</span></h2>
            <p className = "text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> Here are some of my recent projects. Each project was carefully crafted with attention to detail,performance and user experience. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
                {fprojects.map((project,key) => (
                    <div key ={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48 overflow-hidden">
                       <img src= {project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/> 
                     </div>
                     <div className ="p-6">
                        <div className= "flex flex-nowrap gap-2 mb-4">
                          {project.tags.map((tag) =>(
                            <span  key ={tag} className="px-4 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                {tag}
                            </span>
                          )
                        )}
                        </div>
        
                     </div>
                     <div className="text-xl font-semibold mb-1"> {project.title} </div>
                     <p className="text-muted-foreground text-sm mb-4"> {project.description}</p>
                    </div>
                ))}
            </div>
                <div className="text-center mt-12">
                    <a className= "cosmic-button w-fit flex items-center mx-auto gap-2" 
                      target="_blank"
                      href= "https://github.com/Dharshika01">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
        </div>
</section>
);};
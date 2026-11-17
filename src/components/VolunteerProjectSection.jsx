const projects = [{
        id: 1,
        title : "AIESEC - Quality Education",
        image : "/Projects/Aiesec.jpg"},

        {
        id: 2,
        title : "Hult Prize",
        image : "/Projects/Hult Prize.jpg"},

        {
        id: 3,
        title : "IET Summer School",
        image : "/Projects/IET Summer School.jpg"},
        {
        id: 4,
        title : "SyncUp",
        image : "/Projects/SyncUp.jpg"},

];

export const VolunteerProjectSection =() =>{
    return <section id ="volunteerprojects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Volunteer <span className="text-primary">Projects </span></h2> </div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
             Highlights my community involvement, social impact, teamwork, leadership, and experiences outside my academic work.
          </p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index)=>(
                <div
                 key= {index} 
                 className="group bg-card rounded-lg overflow-hidden show-xs card-hover"> 
                 <div className="h-48 overflow-hidden">
                   <img 
                   src ={project.image} alt={project.title} className ="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   /> </div>
                   <div className="p-3 mt-3">
                   <h3 className="text-xl font-semibold mb-1"> {project.title}</h3> </div>
                   </div>
                   
            ))}
         

        </div>
    </section>


};
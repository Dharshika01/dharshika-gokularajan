import {  Mail, MapPin ,Send} from "lucide-react"
import { useState } from "react";
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram
} from "react-icons/fa6";
import emailjs from "@emailjs/browser"
import {toast} from "sonner";

export const ContactSection =() => {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
   
const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_dgi6tks";
    const templateId = "template_75uk4ii";
    const publicKey = "Nez-5UqMYaWJKXEX4";

    const templateParams = {
        name: name,
        to_name: "Dharshi",
        email: email,
        message: message
    };

    emailjs.send(serviceId, templateId, templateParams,publicKey)
    .then(() => {
       toast.success("Email sent successfully!");

        setName("");
        setEmail("");
        setMessage("");
    })
    .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send Message");
    });
};



    return <section id ="contact" 
    className="py-24 px-4 relative bg-secondary/30">
         <div className="container mx-auto max-w-5xl">
         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
         </h2>
         <p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto">
            Feel Free to reach out. I'm always open to discussing new opportunities.
         </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-8 pt-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                              <Mail  className="h-6 w-6 text-primary "/>
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href ="mailto:gdharshi1000@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                gdharshi1000@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                              <MapPin  className="h-6 w-6 text-primary "/>
                        </div>
                        <div>
                            <h4 className="font-medium"> Location</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                Colombo 06, Sri Lanka 
                            </a>
                        </div>
                    </div>
                </div>
                     <div className="pt-8">
                        <h4 className="font-medium mb-4"> Connect With Me </h4>
                           <div className="flex space-x-4 justify-center">
                              <a href = "https://www.linkedin.com/in/dharshika-gokularajan-83717227a/" target="_blank">
                                  <FaLinkedin />
                              </a>
                              <a href="https://x.com/dharshika92847" target ="_blank">
                                 <FaXTwitter />
                              </a>
                              <a href ="https://www.instagram.com/dharshi_goky/" target ="_blank">
                                 <FaInstagram />
                              </a>
                             
                           </div>
                           </div>
                           </div>
                                <div className="bg-card p-8 rounded-lg shadow-xs">
                                     <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
                                     <form onSubmit= {handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name </label>
                                            <input type= "text" 
                                                   id = "name"
                                                   value ={name}
                                                   required
                                                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                                   placeholder="Dharshika Gokularajan"
                                                   onChange={(e) => setName(e.target.value)}
                                                   />
                                        </div>
                                            <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email </label>
                                            <input type= "email" 
                                                   id = "email"
                                                   value={email}
                                                   required
                                                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                                   placeholder="hello@gmail.com"
                                                   onChange ={(e) => setEmail(e.target.value)}
                                                   />
                                        </div>
                                            <div>
                                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message </label>
                                            <textarea 
                                                   id = "message"
                                                   value= {message}
                                                   required
                                                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                                   placeholder=" Hello, I'd like to talk about..."
                                                   onChange ={(e) => setMessage(e.target.value)}
                                                   />
                                        </div>
                                        <button type="submit" className="cosmic-button w-full flex items-center justify-center gap-2">
                                            Send Message 
                                            <Send size= {16}/>
                                        </button>

                                     </form>
                                </div>
                       </div>


                       </div>
                    </section>
               }
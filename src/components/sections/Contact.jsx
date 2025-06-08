import { Mail,Phone } from "lucide-react";
import { useState } from "react";
import { FaArrowRight } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID, e.target,
      import.meta.env.VITE_PUBLIC_KEY)
    .then((result) => {
      alert("Messafe Sent!");
      setFormData({name: "",email: "",message: ""})
    })
    .catch(() => alert("Ooops! Something went wrong. Please try again."));
  };

  

  return(
    <section 
       id="contact" 
       className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20"
    >
    <div className="container mx-auto max-w-5xl">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className=" flex flex-col p-6  space-y-8">
        
          <h2 className="font-bold text-center">Contact Me</h2>
       
          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
               <div className="p-3 rounded-full bg-primary/10">
                 <Mail className="h-6 w-6 text-primary" /> {" "}
               </div>
               <div>
                 <h4 className="font-medium">Email</h4>
                 <a href="mailto:gugulethunkabinde48@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"
                 >
                 gugulethunkabinde48@gmail.com
                </a>
               </div>
            </div>

            <div className="flex items-start space-x-4">
               <div className="p-3 rounded-full bg-primary/10">
                 <Mail className="h-6 w-6 text-primary" /> {" "}
               </div>
               <div>
                 <h4 className="font-medium">Email</h4>
                 <a href="mailto:gugulethunkabinde48@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"
                 >
                 gugulethunkabinde48@gmail.com
                </a>
               </div>
            </div>
          </div>
      </div>


      <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
        <h2 className="text-3xl font-bold mb-8  text-center">
          {" "}
          Get <span className="text-orange-500"> In </span> Touch
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input 
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            className="w-full  border-b border-black px-4 py-3 text-black transition focus:outline-none "
            placeholder="Name..."
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value})
            } 
            />
          </div>

          <div className="relative">
            <input 
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            className="w-full  border-b border-black px-4 py-3 text-black transition focus:outline-none  "
            placeholder="example@gmail.com"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value})
            } 
            />
          </div>

          <div className="relative">
            <textarea 
            type="text"
            id="name"
            name="name"
            required
            rows={5}
            value={formData.message}
            className="w-full   border-b border-black px-4 py-3 text-black transition focus:outline-none"
            placeholder="Your Message..."
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value})
            } 
            />
          </div>
          <div className="flex justify-center items-center ">
          <button
            type="submit"
            className="flex justify-center items-center bg-black text-orange-200 py-3 px-5 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              <span className="pr-2" >Send Message</span> <div className="bg-orange-500 rounded-full w-9 h-9 flex justify-center items-center hover:text-black"><FaArrowRight /></div>
          </button>
          </div>
        </form>
       </div>
      </div>
     </div>
    </section>
  )
}
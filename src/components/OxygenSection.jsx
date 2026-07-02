import plant3 from "../assets/plants/plant3.png"
import { ChevronLeft, ChevronRight } from "lucide-react"
export default function OxygenSection() {
  return (
     <section className="px-10 py-20">
        <h2 className="text-4xl font-bold  text-white text-center mb-16">Our Best O2</h2>
  <div className="relative bg-white/5 rounded-[40px] p-10 flex flext-col lg:flex-row items-center gap-10">
      <div className="lg:w-1/3 flex justify-center">
      <img
      src={plant3}
      className="absolute -top-12 w-[400px]"
      />
      </div>
      <div>
        <h3 className="text-3xl text-gray-300 font-bold">
            We Have Small And Best O2 Plants
             <span className="block text-3xl">Collections</span>
        </h3>
        <p className="text-gray-300 font-semibold max-w-[500px] mt-6">
            Oxygen-producing plants, often referred to as"O2 plants", are those that release oxygen into the atmosphere through the process of photosynthesis.
           <span className="block mt-2">Many plants can help filter out pollutants and toxins from the air, such as formaldihyde,benzene, andtrichloroethylene.This makes the air cleaner and healthier to breath.
        </span>
        </p>
        <div className="flex justify-between items-center mt-6">
        <button className="border text-gray-300 px-8 py-1 rounded-lg mt-1">Explore</button>
         
         <div className="flex items-center gap-5 text-gray-300">
         <ChevronLeft size={16}
         className="cursor-pointer"/>
         <span className="text-sm">01/04</span>
         <ChevronRight size={16}
         className="cursor-pointer"/>
         </div>
         </div>
      </div>
      
    </div>
     <div className="flex justify-center gap-2 mt-10">
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-5 h-2 bg-white rounded-full"></span>
                </div>

     </section>
  
  )
}


import plant3 from "../assets/plants/plant3.png"
import review1 from "../assets/plants/review1.png"
import backgroundimage from "../assets/plants/backgroundimage.png"
import { ChevronDown, ChevronRight, Play } from "lucide-react";

export default function Hero(){
    return(
        <section className="px-10 py-20 pb-10 bg-contain bg-center bg-no-repeat min-h-screen"
        style={{
            backgroundImage: `url('/plants/backgroundimage.png')`
        }}
        >
            <div className="grid lg:grid-cols-2 gap-8 items-start -mt-10">
                <div>
                <h1 className="text-7xl font-bold text-gray-300">
                Earth's Exhale
                </h1>
                <p className="text-gray-300 text-xs mt-3 max-w-[450px] leading-relaxed">
                 "Earth Exhale"symbolizes the purity and vitality of the Earth's
                  natural environment and its essential role in sustaining life.
                </p>
                <div className="mt-8 flex gap-5">
                    <button className="border text-white border-2 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
                        Buy Now
                    </button>

                    <div className="flex items-center justify-center gap-3 text-gray-300">
                    <button className="border text-white border-2 px-3 py-3 rounded-full hover:bg-white hover:text-black transition">
                      <Play size={16} fill="currentColor"/>
                    </button>
                    <span className="text-sm">
                        Live Demo ...
                    </span>
                    </div>
                </div>

            <div className="w-[320px] mt-20 backdrop-blur-md p-4 bg-white/10 border border-white/10 rounded-3xl">
            <div className="flex items-center gap-3">
                <img
                src={review1}
                alt=""
                className="w-10 h-10 rounded-full"
                />
                <div>
                    <h3 className="font-semibold">Ronnie Hamill</h3>
                    <p className="text-yellow-300">★★★★★</p>
                    
                </div>
            </div>
            <p className="text-gray-300 text-sm mt-4">I can't express how thrilled i am with my new natural plants!
                        they bring such a fresh and vibrant energy to my home.
                    </p>
                    </div>
                    </div>

            <div className="flex justify-end items-start">
                <div className="relative w-80 h-[450px] backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                 <img
                 src={plant3}
                 alt=""
                 className="absolute -top-16 left-1/2 -translate-x-1/2 w-72"
                 />
                <div className="mt-60 px-6">
                 <p className="text-gray-300">Indoor Plant</p>
                
                <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-gray-300">Aglaonema Plant</h2>
               
                <ChevronRight size={25} 
                className="text-gray-300 cursor-pointer"/>
                </div>

                <button className="border border-white mt-2 mb-4 text-gray-300 px-8 py-2 rounded-xl">Buy Now</button>
                <div className="flex justify-center gap-2 mt-6">
                    <span className="w-5 h-2 bg-white rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                </div>
                </div>
                </div>
                </div>
            </div>
            
    </section>
    );
}

import logo1 from "../assets/plants/logo1.png"
export default function Footer() {
  return (
    <footer className="px-10 py-20 border-gray-800">
    <div className="flex flex-col md:flex-row justify-between gap-20">
      
      <div className="w-full md:w-1/3">
      <div className="flex items-center">
        <img
        src={logo1}
        alt="Floravision logo"
        className="w-12 h-12 object-contain"
        />
        <h1 className="text-3xl font-bold text-gray-300"> FloraVision.</h1>
        </div>
        <p className="text-gray-300 mt-3">"From lush indoor greens to vibrant outdoor blooms, our plantd are crfted to thrive and elevate your living environment."</p>
        
        <div className="flex gap-8 mt-8 font-bold text-gray-300">
        <span>FB</span>
        <span>TW</span>
        <span>LI</span>
      </div>
      
      </div>
  
      <div className="w-full md:w-1/3 ">
        <h3 className="text-white font-bold text-xl mb-4">
            Quick Links
        </h3>
        <div className="flex flex-col gap-1 ">
    
        <a href="#" className="underline text-gray-300 mt-3">Home</a>
        <a href="#" className="underline text-gray-300">Types Of Plants</a>
        <a href="#" className="underline text-gray-300">Contact</a>
        <a href="#" className="underline text-gray-300">Privacy</a>
      </div>
      </div>

        <div className="w-full md:w-1/3">
            <h3 className="font-bold text-white text-xl mb-8">For Every Update</h3>
            <div className="flex border border-gray-300 rounded-md">
                <input
                type="text"
                placeholder="Enter Email"
                className="border p-3 bg-transparent w-full text-gray-300"
                />
                <button className="bg-white text-black px-5">Subscribe</button>
            </div>
            <p className="text-start text-gray-300 mt-16">FloraVision all © right reserve</p>
        </div>
      </div>
    
    </footer>
   
  );
}



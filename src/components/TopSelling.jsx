import plant3 from "../assets/plants/plant3.png";
import plant4 from "../assets/plants/plant4.png";
import plant5 from "../assets/plants/plant5.png";
import plant6 from "../assets/plants/plant6.png";
import plant7 from "../assets/plants/plant7.png";
import plant8 from "../assets/plants/plant8.png";
import { ShoppingBag } from "lucide-react";

const plants = [
{
    name:"Aglaonema Plant",
    description:"The Aglaonema plant, commonly known as Chinese Evergreen known for itsattractive folliage and ease of care",
    price:"Rs. 300/-",
    image:plant3,
},
{
    name:"Plantain Lilies",
    description:"Hostas are primarily grown for their lush, decorative leaves,which come in awide veriety of shapes,sizes,",
    price:"Rs. 380/-",
    image:plant4,
},
{
    name:"Cactus",
    description:"It is known for their ability tothrive in arid environments",
    price:"Rs. 259/-",
    image:plant5,
},
{
    name:"Swiss cheese plant",
    description:"It is a popular tropical houseplant known for its distinctive,perforated leaves",
    price:"Rs. 400/-",
    image:plant6,
},
{
    name:"Sansevieria plant",
    description:"It is a popular indoor plant admired for its striking appearence and low-maintenence nature.",
    price:"Rs. 450/-",
    image:plant7,
},
{
    name:"Agave plant",
    description:"The Agave plant is a genus of succulent plants known for their striking rosette of thick,fleshy leaves andarchitectural forms.",
    price:"Rs. 359/-",
    image:plant8,
},
    
];

export default function TopSelling(){
    return(
        <section className="px-10 py-20">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our Top Selling Plants</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {plants.map((plant, index)=>(
                    
                <div
                key={index}
                className="relative bg-white/5 p-8 rounded-[35px] flex flex-col"
                >
                    <div className="h-[200px] mb-8 flex items-end justify-center">
                    <img
                    src={plant.image}
                    alt={plant.name}
                    className="absolute -top-12 h-80  object-contain"
                    />
                    </div>
                    
                    <h3 className="text-2xl text-gray-300 mt-6">{plant.name}</h3>
                    <p className="text-gray-300 mt-4">
                        {plant.description}
                    </p>
                    <div className="w-full flex items-center justify-between mt-4">
                    <p className="text-xl text-gray-300 mt-4">{plant.price}</p>
                    <button className=" w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition">
                        <ShoppingBag size={16}/>
                    </button>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}
import profile1 from "../assets/plants/profile1.png"
import profile2 from "../assets/plants/profile2.png"
import profile3 from "../assets/plants/profile3.png"

const reviews = [
    {
        name:"Shelly Russel",
        image:profile1,
        text:"Just got my hands on some awesome plants,and i couldn't be happier!",
    },
     {
        name:"Lula Rolfson",
        image:profile2,
        text:"Each Plant has its own unique charm and prsonality, and they've already started brightening up my space.The vibrant colors and fresh greenery make such a huge difference in my home.",
    },
     {
        name:"Carol Huels",
        image:profile3,
        text:"It's like bringing a little piece of nature indoors.Definitely worth the investment-my plant collection has never looked better",
    },
];
export default function Reviews(){
    return(
        <section className="px-10 py-20">
            <h2 className="text-4xl text-white font-bold text-center mb-17">Customer Review</h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
                {reviews.map((item, index)=>(
                    <div
                    key={index}
                    className="bg-white/5 p-8 rounded-[30px]"
                    >
                        <div className="flex items-center gap-3">
                            <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-full object-cover"
                            />
                        <div>
                <h3 className="text-xl text-gray-300 font-semibold">{item.name}</h3>
                <div className="text-yellow-400">★★★★★ </div>
               </div>
            </div>
            <p className="mt-6">{item.text}</p>
            </div>
                ))}
                </div>
        </section>
    );
}
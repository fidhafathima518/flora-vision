import plant4 from "../assets/plants/plant4.png"
import plant10 from "../assets/plants/plant10.png"
export default function TrendingPlants(){
    return(
     <section className="px-10 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Our Trendy Plants
        </h2>

        <div className="space-y-10">
            <div className="relative bg-white/5 rounded-[40px] p-10 pl-60 flex items-center justify-end overflow-visible">
                <img
                src={plant4}
                alt="plant4"
                className="absolute -top-16 left-10 w-80"
                />
                <div className="flex justify-end">
                    <div className="max-w-md ml-auto">
                    <h3 className="text-3xl  text-white font-semibold">For Your Desk Decorations</h3>
                    <p  className="text-white mt-5">I recently added a beautiful desk decoration plant to my workspace, and it had made such a positive difference!</p>
                    <h4 className="text-3xl text-white">
                        Rs.599/-
                    </h4>
                    <button className="border  text-white px-5 py-2 rounded-lg mt-5">Explore</button>
                </div>
                </div>
            </div>
            <div className="relative bg-white/5 p-10 rounded-[40px] pr-70 flex items-center overflow-visible">
                <img
                src={plant10}
                alt="plant10"
                className="absolute -top-10 right-20 w-50"
                />
                <div className="max-w-md">
             <h3 className="text-3xl  text-white font-semibold">For Your Desk Decorations</h3>
             <p  className=" text-white  mt-5"> The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
             <h4 className="text-3xl  text-white mt-5">Rs. 399/-</h4>
             <button className="border px-5 py-2  text-white rounded-lg mt-5">Explore</button>
            </div>
            </div>
        </div>
     </section>

    )
}

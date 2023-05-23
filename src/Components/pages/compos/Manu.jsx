import ForthOutro from "../../outros/ForthOutro";
import momo from '../../../assets/home/featured.jpg'



const Manu = () => {
    return (
        <>

            <div>

                <section className="text-white text-center pt-20  ">

                    <ForthOutro></ForthOutro>
                    <h4 className="border-y-4 font-bold mx-auto w-3/12 my-4 py-3">FROM OUR MENU</h4>

                </section>
            </div>

            {/* two side */}

            <div className="md:flex ju-full h-full mx-28 text-white justify-center items-center">

                <div className="w-1/2 mr-4">
                    <img src={momo} alt="" />
                </div>

                <div className="w-1/2">
                    <p>March 20, 2023
                        WHERE CAN I GET SOME?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                </div>

            </div>
        </>
    );
};

export default Manu;
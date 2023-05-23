
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// here is the cmporting the css
import '../css/bistroabout.css'
// here is the cmporting the css ends


import bannerImage1 from '../../../src/assets/home/01.jpg'
import bannerImage2 from '../../../src/assets/home/02.jpg'
import bannerImage3 from '../../../src/assets/home/03.png'
import bannerImage4 from '../../../src/assets/home/04.jpg'
import bannerImage5 from '../../../src/assets/home/05.png'
import bannerImage6 from '../../../src/assets/home/06.png'
import Firstoutro from "../outros/Firstoutro";
import About from "./compos/About";
import Secoundutro from "../outros/Secoundutro";
import ThreeOutro from "../outros/ThreeOutro";
import Manu from "./compos/Manu";
import SwiperSliderMahedi from "./compos/SwiperSliderMahedi";
import Manus from "./compos/Manus";
import ManuCard from "./compos/ManuCard";
import { Helmet } from "react-helmet";


const Hone = () => {
    return (
        <div >
            {/* here is the helmate  */}
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            {/* here is the helmate ends */}

            <Carousel>
                <div>
                    <img src={bannerImage1} />

                </div>
                <div>
                    <img src={bannerImage2} />

                </div>
                <div>
                    <img src={bannerImage3} />

                </div>
                <div>
                    <img src={bannerImage4} />

                </div>
                <div>
                    <img src={bannerImage5} />

                </div>
                <div>
                    <img src={bannerImage6} />

                </div>
            </Carousel>


            <br />

            {/* this is teh outro section */}
            <section className="text-center">

                <Firstoutro></Firstoutro>
                <h4 className="border-y-4 font-bold mx-auto w-3/12 my-4 py-3">ORDER ONLINE</h4>

            </section>
            {/* this is teh outro section  ends*/}


            {/* here is teh card carudol starts */}
            <section className="w-4/6 mx-auto my-5 h-[450px] my-4">
                <SwiperSliderMahedi></SwiperSliderMahedi>
            </section>
            {/* here is teh card carudol ends */}

            {/* <<<<<<<<<<<<<<<<<<<<<<<<============================>>>>>>>>>>>>>>>>>>>>>>> */}


            {/* here is the Bistro Boss about */}
            <section id="AboutBg" className="w-full h-[572px] flex   items-center  ">

                <About></About>


            </section>
            {/* here is the Bistro Boss about ends */}


            {/* here is the outro 2 */}

            <section className="text-center mt-10">

                <Secoundutro></Secoundutro>
                <h4 className="border-y-4 font-bold mx-auto w-3/12 my-4 py-3">ORDER ONLINE</h4>

            </section>

            {/* here is the outro 2 ends */}

            {/* here is the manue section starts */}
            <section className="w-full py-20">

                <Manus></Manus>


            </section>
            {/* here is the manue section starts ends */}


            {/* sere is the Contact section starts */}
            <section>

                <div className="w-full h-[230px] text-white flex justify-center items-center bg-black">

                    <h5 className="text-bold  text-4xl">Call Us: +88 0192345678910</h5>

                </div>

            </section>
            {/* sere is the Contact section ends */}



            {/* here is the 3rd outro starts */}

            <section className="text-center mt-10">

                <ThreeOutro></ThreeOutro>
                <h4 className="border-y-4 font-bold mx-auto w-3/12 my-4 py-3">CHEF RECOMMENDS</h4>

            </section>
            {/* here is the 3rd outro ends */}


            {/* here is teh items and card sections starts */}
            <section>

                <ManuCard></ManuCard>


            </section>
            {/* here is teh items and card sections ends  */}


            {/* here is teh manue banner */}
            <section id="manue" className=" w-fulll h-[848px]">

                <Manu></Manu>

                {/* two side ends */}
            </section>
            {/* here is teh manue banner ends */}




        </div>
    );
};

export default Hone;
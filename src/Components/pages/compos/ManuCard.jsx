import { useEffect, useState } from "react";
import SingleRecumended from "./SingleRecumended";

const ManuCard = () => {


    const [Data1, SetData] = useState([])

    useEffect(() => {
        let url = `https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/menu.json`

        fetch(url)
            .then(res => res.json())
            .then(data => SetData(data))
    }, [])

    return (
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto my-10">

            {
                Data1.slice(0, 3).map(res => <SingleRecumended key={res._id}

                    data={res}
                >

                </SingleRecumended>)
            }


        </div>
    );
};

export default ManuCard;
import { useEffect, useState } from "react";
import SingleDatas from "./SingleDatas";

const Manus = () => {

    const [Data, SetData] = useState([])

    useEffect(() => {
        let url = `https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/menu.json`

        fetch(url)
            .then(res => res.json())
            .then(data => SetData(data))
    }, [])


    return (
        <div className="grid md:grid-cols-2 gap-4">
            {

                Data.slice(0, 6).map(rel => <SingleDatas key={rel._id}


                    data={rel}

                ></SingleDatas>)
            }
        </div>
    );
};

export default Manus;
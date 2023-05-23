



import { Helmet } from 'react-helmet-async';
import Cover from './compos/Cover';
import SingleDatas from './compos/SingleDatas';

const OurManur = () => {

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Manue</title>

            </Helmet>
            {/* helmet ends */}


            <div>

                <Cover></Cover>
                
                <Cover></Cover>

                <Cover></Cover>

            </div>


        </div>
    );
};

export default OurManur;
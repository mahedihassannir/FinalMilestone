
const SingleRecumended = ({ data }) => {

    let { recipe, image, category, } = data



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className=" ">
                    <img src={image} alt="Shoes" className="w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRecumended;
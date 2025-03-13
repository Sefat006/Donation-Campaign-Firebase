import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const CardDonation = ({ props }) => {

    const {contactInfo, id, description, division, image, title} = props;
    return (
        <div className="h-full">
            
            <div className="card bg-base-100 shadow-sm">
               
                    <img
                    src={image}
                    alt="Movie" className="md:h-96 lg:h-60 h-full w-full" />
                <div className="card-body">
                    <h2 className="card-title text-start md:text-2xl">{title}</h2>
                    <p className='text-start'>
                        {description.split(" ").slice(0, 15).join(" ")}...
                    </p>
                    <h2 className="card-title text-sm"><FaLocationDot></FaLocationDot>{division}</h2>
                    <div className="justify-center card-actions">
                        <Link to={`/donation/${id}`} className="btn btn-primary">Donate Now</Link>
                    </div>
                </div>
            </div>    



        </div>
    );
};

export default CardDonation;
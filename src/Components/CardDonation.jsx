import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const CardDonation = ({ props }) => {

    const {contactInfo, description, division, image, status, title} = props;
    return (
        <div className="h-full">
            

            <div className="card bg-base-100 shadow-sm">
               
                    <img
                    src={props.image}
                    alt="Movie" className="md:h-96 h-48 w-full" />
                <div className="card-body">
                    <h2 className="card-title text-start md:text-2xl">{props.title}</h2>
                    <p className='text-start'>
                        {props.description.split(" ").slice(0, 15).join(" ")}...
                    </p>
                    <h2 className="card-title text-sm"><FaLocationDot></FaLocationDot>{props.division}</h2>
                    <div className="justify-center card-actions">
                        <Link to="/campaign" className="btn btn-primary">Donate Now</Link>
                    </div>
                </div>
            </div>    



        </div>
    );
};

export default CardDonation;
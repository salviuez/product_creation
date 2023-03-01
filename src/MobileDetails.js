import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";
export function MobileDetails() {
    const { id } = useParams();
    console.log(useParams());

    const [mobile, setMobile] = useState({});
    const getMobile = () => {
        fetch(`${API}/mobiles/${id}`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mv) => setMobile(mv));
    };
    useEffect(() => getMobile(), []);

    const styles = {
        color: mobile.rating > 8.5 ?
            "green" : "red",
    };
    const navigate = useNavigate();
    return (
        <div>
            <iframe width="100%" height="800" src={mobile.trailer}
                title="No Country For Old Men (2007) Official Trailer - Tommy Lee Jones, Javier Bardem Movie HD"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
      picture-in-picture" allowfullscreen></iframe>
            <div className="product-detail-container">
                <div className="product-specs">
                    <h2 className="product-name">
                        {mobile.name}

                    </h2>
                    <p style={styles} className="product-rating"> ⭐{mobile.rating} </p>
                </div>

                <p className="product-summary">{mobile.summary}</p>

            </div>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}

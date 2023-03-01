import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";


export function Mobile({ mobile, deleteButton, editButton }) {
    // const movie = {
    //   name: "Vikram",
    //   poster:
    //     "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    //   rating: 8.4,
    //   summary:
    //     "Members of a black ops team must track and eliminate a gang of masked murderers."
    // };
    //conditional styling
    const styles = {
        color: mobile.rating > 8.5 ? "green" : "red"
    };

    const navigate = useNavigate();

    const [show, setShow] = useState(true);
    return (
        <Card className="product-container">
            <img src={mobile.poster} alt={mobile.name} className="product-poster" />
            <CardContent>
                <div className="product-specs">
                    <h2 className="product-name">{mobile.name}
                        <IconButton onClick={() => setShow(!show)} aria-label="delete">
                            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>

                        <IconButton onClick={() => navigate(`/mobiles/${mobile.id}`)} aria-label="delete">
                            <InfoIcon />
                        </IconButton>

                    </h2>
                    <p style={styles} className="product-rating"> ⭐{mobile.rating} </p>
                </div>

                {show ? <p className="product-summary">{mobile.summary}</p> : null}
            </CardContent>
            <CardActions>

                {/* <Counter /> */}
                {editButton} {deleteButton}
            </CardActions>

        </Card>
    );
}

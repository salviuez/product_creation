import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global";


const mobileValidationSchema = yup.object({
    name: yup.string().required("why not fill the email"),
    poster: yup.string().required("Add the poster").min(4, "Need a bigger poster"),
    rating: yup.number().required("Mention Rating").min(0).max(10),
    summary: yup.string().required("Add Summary").min(20, "need a bigger summary"),
    trailer: yup.string().required("Add trailer link").min(4, "Need a bigger trailer"),


});

export function AddMobile() {

    // const [name, setName] = useState("");
    // const [poster, setPoster] = useState("");
    // const [rating, setRating] = useState("");
    // const [summary, setSummary] = useState("");
    // const [trailer, setTrailer] = useState("");
    // const navigate = useNavigate();


    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            name: "1",
            poster: "2",
            rating: "3",
            summary: "4",
            trailer: "5",
        },

        validationSchema: mobileValidationSchema,
        onSubmit: (newMobile) => {
            console.log("the values are", newMobile);
            addMobile(newMobile);
        },


    });

    const navigate = useNavigate();


    const addMobile = (newMobile) => {
        // const newMovie = {
        //     name: name,
        //     poster: poster,
        //     rating: rating,
        //     summary: summary,
        //     trailer: trailer,
        // };
        console.log(newMobile);

        // create copy of the movielist and add new movie to it
        // setMovieList([...movieList, newMovie]);


        fetch(`${API}/mobiles`, {
            method: "POST",
            body: JSON.stringify(newMobile),
            headers: {
                "Content-Type": "application/json",
            },

        }).then(() => navigate("/mobiles"));
    };



    return (
        <div>
            <form onSubmit={handleSubmit} className="add-product-container">


                <TextField
                    label="name"
                    variant="outlined"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && errors.name}
                    helperText={touched.name && errors.name ? errors.name : null}
                />



                <TextField
                    label="poster"
                    variant="outlined"
                    name="poster"
                    value={values.poster}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.poster && errors.poster}
                    helperText={touched.poster && errors.poster ? errors.poster : null}
                />



                <TextField
                    label="Rating"
                    variant="outlined"
                    name="rating"
                    value={values.rating}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.rating && errors.rating}
                    helperText={touched.rating && errors.rating ? errors.rating : null}
                />

                <TextField
                    label="summary"
                    variant="outlined"
                    name="summary"
                    value={values.summary}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.summary && errors.summary}
                    helperText={touched.summary && errors.summary ? errors.summary : null}
                />

                <TextField
                    label="Trailer"
                    variant="outlined"
                    name="trailer"
                    value={values.trailer}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.trailer && errors.trailer}
                    helperText={touched.trailer && errors.trailer ? errors.trailer : null}

                />


                <Button type="submit" variant="contained">Add Product</Button>

            </form>
        </div >
    );
}

import React from "react";
import { Mobile } from "./Mobile";
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global.js"


export function MobileList() {

    const [mobileList, setMobileList] = useState([]);

    const getMobiles = () => {
        fetch(`${API}/mobiles`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mvs) => setMobileList(mvs));
    };

    useEffect(() => getMobiles(), [])




    const deleteMobile = (id) => {
        fetch(`${API}/mobiles/${id}`, {
            method: "DELETE",
        }).then(() => getMobiles(),);

    }


    const navigate = useNavigate();
    return (
        <div>
            <div className="product-list">
                {mobileList.map((mv) => (
                    <Mobile
                        mobile={mv}

                        deleteButton={
                            <IconButton
                                onClick={() => deleteMobile(mv.id)}
                                color="error"
                                aria-label="delete">
                                <DeleteIcon />
                            </IconButton>

                        }

                        editButton={
                            <IconButton
                                onClick={() => navigate(`/mobiles/edit/${mv.id}`)}
                                color="secondary"
                                aria-label="edit">
                                <EditIcon />
                            </IconButton>

                        }
                    />
                ))}
            </div>
        </div>

    );

}

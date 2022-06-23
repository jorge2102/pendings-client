import React, { useState, useEffect } from "react";
import axios from "axios";
import PendingComponent from "./PendingComponent";
import { Constants } from "../../utils/constants";

const PendingPage = () => {
    const [pendings, setPendings] = useState([])

    const fetchPendings = async () => {
        const response = await axios
            .get(Constants.API_URL_PENDING)
            .catch((err) => {
                console.log("Err: ", err);
            });

        setPendings(response.data.pendings);
    };

    const updatePendings = async (pending) => {
        const path = `${Constants.API_URL_PENDING}/${pending.id}`;

        const response = await axios
            .put(path, pending)
            .catch((err) => {
                console.log("Err: ", err);
            });

        fetchPendings();
    };

    const createPendings = async (pending) => {
        const response = await axios
            .post(Constants.API_URL_PENDING, pending)
            .catch((err) => {
                console.log("Err: ", err);
            });

        fetchPendings();
    };

    const searchPendings = async (text) => {
        const path = `${Constants.API_URL_PENDING}/filter/${text}`;

        const response = await axios
            .get(path)
            .catch((err) => {
                console.log("Err: ", err);
            });

        setPendings(response.data);
    };

    useEffect(() => {
        fetchPendings();
    }, []);

    return (
        <div className="ui grid container">
            <PendingComponent
                pendings={pendings}
                getPendings={fetchPendings}
                createPendings={createPendings}
                updatePendings={updatePendings}
                searchPendings={searchPendings}
            />
        </div>
    );
}

export default PendingPage;
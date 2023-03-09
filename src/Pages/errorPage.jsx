import React from "react";
import { useRouteError } from "react-router-dom";


function ErrorPage(){

    const error = useRouteError();
    console.error(error);
    

    return(
        <div>
            <h1>Opa!</h1>
            <p>Algo não está certo...</p>

            <p>
                <i>{ error.statusText || error.message }</i>
            </p>
        </div>
    );
};


export default ErrorPage;
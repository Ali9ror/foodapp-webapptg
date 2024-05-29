import React from "react";
import "./ErrorPage.css"
import { FaExclamationTriangle } from "react-icons/fa";

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <FaExclamationTriangle className="error-icon" />
            <h1 className="error-heading">404 Error</h1>
            <p className="error-message">Page Not Found</p>
        </div>
    );
};

export default PageNotFound;


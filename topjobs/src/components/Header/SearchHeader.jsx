import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

export default function SearchHeader(props) {
    const LogoutHandler = () => {
        localStorage.setItem('topJobsToken', JSON.stringify(null))
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark myheader" id="mainheader">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-briefcase-fill mx-3" viewBox="0 0 16 16"> <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" /> <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" /> </svg>
                    {props.title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <form className="d-flex mr-auto py-2">
                            <select id="categories" className="form-select me-2" aria-label="Default select example">
                                <option value="search" defaultValue>Search by</option>
                                <option value="title">Job Title</option>
                                <option value="description">Job Description</option>
                                <option value="salary">Salary</option>
                                <option value="location">Location</option>
                            </select>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <ul className="navbar-nav me-3 mb-2 mb-lg-0 ml-auto">
                        <li className="nav-item">
                            <Link to="/" onClick={LogoutHandler} className="nav-link">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

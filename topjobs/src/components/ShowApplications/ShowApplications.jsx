import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './ShowApp.css'

export default function ShowApplications() {

    const [apps, setApps] = useState([])
    const [posts, setPosts] = useState([])
    const [flag, setFlag] = useState(false);

    const item = [];
    let jsID = "J001";
    let data1 = [];
    let data2 = [];
    let copyProps = [];
    let temp = false;

    useEffect(() => {
        axios.get('http://localhost:51055/api/jobapplications')
            .then(response => {
                setFlag(false);
                setApps(response.data)
            });
        axios.get('http://localhost:53928/api/jobposting')
            .then(response => {
                setFlag(false);
                setPosts(response.data)
            });
    }, [flag]);

    if (posts !== null && apps != null) {

        for (const x of apps) {
            if (x["jsId"] === jsID) {
                data1.push(x["jpId"]);
                data2.push(x);
            }
        }

        for (const y of posts) {
            for (const w of data1) {
                if (y["jP_ID"] === w) {
                    temp = true;
                }
            }
            if (temp === true) {
                copyProps.push(y);
            }
            temp = false;
        }


        function myFunction(params) {
            switch (params) {
                case 0:
                    return "Not Viewed";
                case 1:
                    return "on Hold";
                case 2:
                    return "Shortlisted"
                case 3:
                    return "Rejected"
                default:
                    return "value received is different";
            }
        }

        for (const arr of data2) {
            for (const value of copyProps) {
                if (value["jP_ID"] === arr["jpId"]) {
                    item.push(
                        <section className="card ml-3 mb-5" style={{ width: "20rem", height: "363px", marginTop: "10px" }}>
                            <section className="card-body bg-light mb-3 ">
                                <h5 className="card-title"> {value['jobTitle']} </h5><hr />
                                <h5> {value['hiringOrganization']} </h5>
                                <p className="card-text"> {value['jobDescription']} </p>
                                <h6 className="card-subtitle mb-2 text-muted" >ExperienceRequired : {value['experienceInYears']} years</h6>
                                <h6 className="card-subtitle mb-2 text-muted" >Location : {value['location']}</h6>
                                <h6 className="card-subtitle mb-2 text-muted" >PrimarySkill   : {value['primarySkill']}</h6>
                                <h6 className="card-subtitle mb-2 text-muted" >SecondarySkill : {value['secondarySkill']}</h6>
                                <h6 className="card-subtitle mb-2 text-muted" >Qualification : {value['requiredQualification']}</h6>
                                <h6 className="card-subtitle mb-2 text-muted" >Salary : {value['salary']}</h6>
                                <h4 className="card-subtitle mb-2 text-muted" >Progress : {myFunction(arr['progress'])}</h4>
                            </section>
                        </section>);
                }
            }
        }
    }

    return (
        <div className="jobposts">
            {item}
        </div>
    )
}
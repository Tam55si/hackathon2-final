import React from 'react';
import "./Resume1.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Resume1() {
    const { userid } = useParams();

    const [userdata, userdatachange] = useState({});

    useEffect(() => {
        fetch("/api/" + userid).then((res) => {
            return res.json();
        }).then((resp) => {
            userdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const handlePrint = () => {
        window.print();
    }


    return (
        <>
            <h1>Resume</h1>
            <div className='wrap'>

                <div className="section">
                    <h3>{userdata.name}</h3>
                    <h2>Contact Information</h2>


                    <p className="contact-info">Location: {userdata.location}</p>
                    <p className="contact-info">Phone: {userdata.phone}</p>
                    <p className="contact-info">Email: {userdata.email}</p>
                </div>

                <div className="section">
                    <h2>About Me</h2>
                    <p>{userdata.aboutme}</p>


                </div>

                <div className="section">
                    <h2>Education</h2>
                    <p><span className="subheading">{userdata.study}</span></p>
                    <p><span className="date">{userdata.enddate}</span></p>
                    <p>{userdata.coll}</p>
                </div>
                <div className="section">
                    <h2>Certificate</h2>
                    <p><span className="subheading">{userdata.certifi}</span></p>
                    <p><span className="date">{userdata.certifidate}</span></p>
                </div>

                <div className="section">
                    <h2>Experience</h2>
                    <p><span className="subheading">{userdata.orgrole}</span></p>
                    <p><span className="date">{userdata.orgsd} - {userdata.orged}</span></p>
                    <p>{userdata.org}</p>
                </div>

                <div className="section">
                    <h2>Projects</h2>
                    <p><span className="subheading">{userdata.projectn}</span></p>
                    <p><span className="date">{userdata.projectd}</span></p>
                    <p>{userdata.projecturl}</p>

                </div>

                <div className="section">
                    <h2>Skills</h2>
                    <ul className="skills">
                        <li>{userdata.skill1}</li>
                        <li>{userdata.skill2}</li>
                        <li>{userdata.skill3}</li>
                    </ul>
                </div>
            </div>

            <Link className="btn btn-danger" to="/list">Back to Listing</Link>
            <a onClick={handlePrint} className="btn btn-primary">Print</a>
        </>
    )
}

export default Resume1

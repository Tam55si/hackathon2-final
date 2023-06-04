import React from 'react';
import './Resume2.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Resume2() {
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
            <div className='resumetop'>
                <h1 style={{ "color": "black" }}>Resume</h1>
                <div className="resume">
                    <div className="resume_left">

                        <div className="resume_content">
                            <div className="resume_item resume_info">
                                <div className="title">
                                    <p className="bold">{userdata.name}</p>
                                    <p className="regular">{userdata.cdes}</p>
                                </div>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-map-signs"></i>
                                        </div>
                                        <div className="data">
                                            {userdata.location}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-mobile-alt"></i>
                                        </div>
                                        <div className="data">
                                            {userdata.phone}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="data">
                                            {userdata.email}
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className="resume_item resume_skills">
                                <div className="title">
                                    <p className="bold">skills</p>
                                </div>
                                <ul>
                                    <li>
                                        <div className="skill_name">
                                            {userdata.skill1}
                                        </div>
                                        <div className="skill_progress">
                                            <span ></span>
                                        </div>
                                        <div className="skill_per">80%</div>
                                    </li>
                                    <li>
                                        <div className="skill_name">
                                            {userdata.skill2}
                                        </div>
                                        <div className="skill_progress">
                                            <span ></span>
                                        </div>
                                        <div className="skill_per">70%</div>
                                    </li>
                                    <li>
                                        <div className="skill_name">
                                            {userdata.skill3}
                                        </div>
                                        <div className="skill_progress">
                                            <span ></span>
                                        </div>
                                        <div className="skill_per">90%</div>
                                    </li>

                                </ul>
                            </div>
                            <div className="resume_item resume_social">
                                <div className="title">
                                    <p className="bold">Certification</p>
                                </div>
                                <ul>
                                    <li>
                                        {/* <div className="icon">
                                            <i className="fab fa-facebook-square"></i>
                                        </div> */}
                                        <div className="data">
                                            <p className="semi-bold">{userdata.certifi}</p>
                                            <p>{userdata.certifidate}</p>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="resume_right">
                        <div className="resume_item resume_about">
                            <div className="title">
                                <p className="bold">About me</p>
                            </div>
                            <p>{userdata.aboutme}</p>
                        </div>
                        <div className="resume_item resume_work">
                            <div className="title">
                                <p className="bold">Projects</p>
                            </div>
                            <ul>
                                <li>

                                    <div className="info">
                                        <p className="semi-bold">{userdata.projectn}</p>
                                        <p>{userdata.projectd}</p>
                                        <div className="date">{userdata.url}</div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="resume_item resume_education">
                            <div className="title">
                                <p className="bold">Education</p>
                            </div>
                            <ul>
                                <li>
                                    <div className="date">{userdata.enddate}</div>
                                    <div className="info">
                                        <p className="semi-bold">{userdata.coll}</p>
                                        <p>{userdata.study}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="resume_item resume_work">
                            <div className="title">
                                <p className="bold">Work Experience</p>
                            </div>
                            <ul>
                                <li>

                                    <div className="info">
                                        <p className="semi-bold">{userdata.org}</p>
                                        <p>{userdata.orgrole}</p>
                                        <p>{userdata.orgsd}</p>
                                        <div className="date">{userdata.orged}</div>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
                <div> <h1 style={{ "color": "#8ea3e1" }}>end</h1></div>
            </div>
            <Link className="btn btn-danger" to="/list">Back to Listing</Link>
            <a onClick={handlePrint} className="btn btn-primary">Print</a>
        </>
    )
}

export default Resume2

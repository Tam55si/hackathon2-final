import React from 'react';
import './Resume4.css';
import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";


const handlePrint = () => {
    window.print();
}


function Resume4() {
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

    return (
        <>
            <div className='back'>
                <h1 style={{ "color": "white" }}>Resume</h1>
                <div className="wrapper">
                    <div className="resume">
                        <div className="left">

                            <div className="contact_wrap pb">
                                <div className="title">
                                    Contact
                                </div>
                                <div className="contact">
                                    <ul>
                                        <li>
                                            <div className="li_wrap">
                                                <div className="text">Email : {userdata.email}</div>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="li_wrap">
                                                <div className="text">Phone :  {userdata.phone}</div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="li_wrap">

                                                <div className="text">Location : {userdata.location}</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="skills_wrap pb">
                                <div className="title">
                                    Skills
                                </div>
                                <div className="hobbies">
                                    <ul>
                                        <li>
                                            <div className="li_wrap">

                                                <div className="text">{userdata.skill1}</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li_wrap">

                                                <div className="text">{userdata.skill2}</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li_wrap">

                                                <div className="text">{userdata.skill3}</div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="hobbies_wrap pb">
                                <div className="title">
                                    Certificate
                                </div>
                                <div className="contact">
                                    <ul>
                                        <li>
                                            <div className="li_wrap">

                                                <div className="text">{userdata.certifi}</div>

                                            </div>
                                            <div className="li_wrap">
                                                <div className="text">{userdata.certifidate}</div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="header">
                                <div className="name_role">
                                    <div className="name">
                                        {userdata.name}
                                    </div>
                                    <div className="role">
                                        {userdata.cdes}
                                    </div>
                                </div>
                                <div className="about">
                                    {userdata.aboutme}
                                </div>
                            </div>
                            <div className="right_inner">
                                <div className="exp">
                                    <div className="title">
                                        PROJECT
                                    </div>
                                    <div className="exp_wrap">
                                        <ul>
                                            <li>
                                                <div className="li_wrap">
                                                    <div className="date">
                                                        {userdata.certifidate}
                                                    </div>
                                                    <div className="info">
                                                        <p className="info_title">
                                                            {userdata.projectn}
                                                        </p>

                                                        <p className="info_cont">
                                                            {userdata.projectd}
                                                        </p>
                                                        <p className="info_com">
                                                            URL : {userdata.projecturl}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                                <div className="education">
                                    <div className="title">
                                        Education
                                    </div>
                                    <div className="education_wrap">
                                        <ul>
                                            <li>
                                                <div className="li_wrap">
                                                    <div className="date">
                                                        {userdata.enddate}
                                                    </div>
                                                    <div className="info">
                                                        <p className="info_title">
                                                            {userdata.study}
                                                        </p>
                                                        <p className="info_com">
                                                            {userdata.coll}
                                                        </p>

                                                    </div>
                                                </div>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                                <div className="education">
                                    <div className="title">
                                        Experience
                                    </div>
                                    <div className="education_wrap">
                                        <ul>
                                            <li>
                                                <div className="li_wrap">
                                                    <div className="date">
                                                        {userdata.orgsd} - {userdata.orged}
                                                    </div>
                                                    <div className="info">
                                                        <p className="info_title">
                                                            {userdata.org}
                                                        </p>
                                                        <p className="info_com">
                                                            {userdata.orgrole}
                                                        </p>

                                                    </div>
                                                </div>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div> <h1 style={{ "color": "#232223" }}>end</h1></div>


            </div>
            <Link className="btn btn-danger" to="/list">Back to Listing</Link>
            <a onClick={handlePrint} className="btn btn-primary">Print</a>
        </>
    )
}

export default Resume4

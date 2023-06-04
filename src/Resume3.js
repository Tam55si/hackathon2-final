import React from "react";
import './Resume3.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Resume3() {
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

            <div className="container">
                <div className="header">
                    <div className="full-name">
                        <span className="first-name">{userdata.name}</span>
                    </div>
                    <div className="contact-info">
                        <span className="email">Email: </span>
                        <span className="email-val">h{userdata.email}</span>
                        <span className="separator"></span>
                        <span className="phone">Phone: </span>
                        <span className="phone-val">{userdata.phone}</span>
                    </div>

                    <div className="about">
                        <span className="position">{userdata.cdes} </span>
                        <span className="desc">
                            {userdata.aboutme}
                        </span>
                    </div>
                </div>
                <div className="details">
                    <div className="section">
                        <div className="section__title">Experience</div>
                        <div className="section__list">
                            <div className="section__list-item">
                                <div className="left">
                                    <div className="name">{userdata.org}</div>
                                    <div className="addr">{userdata.orgrole}</div>
                                    <div className="duration">{userdata.orgsd} - {userdata.orged}</div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="section__title">Education</div>
                    <div className="section__list">
                        <div className="section__list-item">
                            <div className="left">
                                <div className="name">{userdata.coll}</div>
                                <div className="addr">{userdata.study}</div>
                                <div className="duration">J{userdata.enddate}</div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="section">
                    <div className="section__title">Projects</div>
                    <div className="section__list">
                        <div className="section__list-item">
                            <div className="name">{userdata.projectn}</div>
                            <div className="text">
                                {userdata.projectd}<br />
                                {userdata.projecturl}
                            </div>
                        </div>


                    </div>
                </div>

                <div className="section">
                    <div className="section__title">Skills</div>
                    <div className="skills">
                        <div className="skills__item">
                            <div className="left">
                                <div className="name">{userdata.skill1}</div>
                            </div>

                        </div>
                    </div>
                    <div className="skills__item">
                        <div className="left">
                            <div className="name">{userdata.skill2}</div>
                        </div>

                    </div>
                    <div className="skills__item">
                        <div className="left">
                            <div className="name">{userdata.skill3}</div>
                        </div>

                    </div>
                </div>



            </div >

            <Link className="btn btn-danger" to="/list">Back to Listing</Link>
        </>
    );
}

export default Resume3;

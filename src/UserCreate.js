import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserCreate = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [cdes, cdeschange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [location, locationchange] = useState("");
    const [aboutme, aboutmechange] = useState("");
    const [coll, collchange] = useState("");
    const [study, studychange] = useState("");
    const [enddate, enddatechange] = useState("");
    const [certifi, certifichange] = useState("");
    const [certifidate, certifidatechange] = useState("");
    const [org, orgchange] = useState("");
    const [orgrole, orgrolechange] = useState("");
    const [orgsd, orgsdchange] = useState("");
    const [orged, orgedchange] = useState("");
    const [projectn, projectnchange] = useState("");
    const [projectd, projectdchange] = useState("");
    const [projecturl, projecturlchange] = useState("");
    const [skill1, skill1change] = useState("");
    const [skill2, skill2change] = useState("");
    const [skill3, skill3change] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { name, cdes, email, phone, aboutme, location, coll, study, enddate, certifi, certifidate, org, orgrole, orgsd, orged, projectn, projectd, projecturl, skill1, skill2, skill3, active };


        fetch("/api", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title" style={{ "textAlign": "center" }}>
                                <h2>User Details</h2>
                            </div>
                            <div className="card-body">

                                <div className="card-body">
                                    <div className="row">
                                        <div className="card-title" style={{ "fontSize": "20px" }}>
                                            <p>Profile</p>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>ID</label>
                                                <input value={id} disabled="disabled" className="form-control"></input>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                                {name.length == 0 && validation && <span className="text-danger">Enter name</span>}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Current Designation</label>
                                            <input required value={cdes} onMouseDown={e => valchange(true)} onChange={e => cdeschange(e.target.value)} className="form-control"></input>
                                            {cdes.length == 0 && validation && <span className="text-danger">Enter Current Designation</span>}

                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                                {email.length == 0 && validation && <span className="text-danger">Enter Email</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                                {phone.length == 0 && validation && <span className="text-danger">Enter Phone number</span>}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Location</label>
                                                <input value={location} onChange={e => locationchange(e.target.value)} className="form-control"></input>
                                                {location.length == 0 && validation && <span className="text-danger">Enter Location</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Tell us About yourself</label>
                                            <textarea value={aboutme} onChange={e => aboutmechange(e.target.value)} className="form-control" rows={3} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="card-title" style={{ "fontSize": "20px" }}>
                                        <p>Recent Education</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <label>Collage/University/School</label>
                                        <input required value={coll} onMouseDown={e => valchange(true)} onChange={e => collchange(e.target.value)} className="form-control"></input>
                                        {coll.length == 0 && validation && <span className="text-danger">Enter Collage/University/School Name</span>}
                                    </div>
                                    <div className="col-lg-12">

                                        <label>Study</label>
                                        <input required value={study} onMouseDown={e => valchange(true)} onChange={e => studychange(e.target.value)} className="form-control"></input>
                                        {study.length == 0 && validation && <span className="text-danger">Enter Field of study</span>}

                                    </div>
                                    <div className="col-lg-12">

                                        <label>End Date</label>
                                        <input type="date" required value={enddate} onMouseDown={e => valchange(true)} onChange={e => enddatechange(e.target.value)} className="form-control"></input>
                                        {enddate.length == 0 && validation && <span className="text-danger">Enter End Date</span>}

                                    </div>
                                    <div className="col-lg-12">

                                        <label>Certification</label>
                                        <input type="text" required value={certifi} onMouseDown={e => valchange(true)} onChange={e => certifichange(e.target.value)} className="form-control"></input>
                                        <label>Certification End Date</label>
                                        <input type="date" required value={certifidate} onMouseDown={e => valchange(true)} onChange={e => certifidatechange(e.target.value)} className="form-control"></input>


                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="card-title" style={{ "fontSize": "20px" }}>
                                        <p>Professional Experience</p>
                                    </div>
                                    <div className="col-lg-12">

                                        <label>Organization Name</label>
                                        <input type="text" required value={org} onMouseDown={e => valchange(true)} onChange={e => orgchange(e.target.value)} className="form-control"></input>
                                        <div className="col-lg-12">
                                            <label>Role/Designation</label>
                                            <input type="text" required value={orgrole} onMouseDown={e => valchange(true)} onChange={e => orgrolechange(e.target.value)} className="form-control"></input>
                                        </div><div className="col-lg-12">
                                            <label>Start Date</label>
                                            <input type="date" required value={orgsd} onMouseDown={e => valchange(true)} onChange={e => orgsdchange(e.target.value)} className="form-control"></input>
                                        </div><div className="col-lg-12">
                                            <label>End Date</label>
                                            <input type="date" required value={orged} onMouseDown={e => valchange(true)} onChange={e => orgedchange(e.target.value)} className="form-control"></input>
                                        </div>

                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="card-title" style={{ "fontSize": "20px" }}>
                                        <p>Projects</p>
                                    </div>
                                    <div className="col-lg-12">

                                        <label>Project Name</label>
                                        <input type="text" required value={projectn} onMouseDown={e => valchange(true)} onChange={e => projectnchange(e.target.value)} className="form-control"></input>
                                        <div className="col-lg-12">
                                            <label>Project Description</label>
                                            <textarea rows={3} type="text" required value={projectd} onMouseDown={e => valchange(true)} onChange={e => projectdchange(e.target.value)} className="form-control" />
                                        </div><div className="col-lg-12"><label>Project URL</label>
                                            <input type="text" required value={projecturl} onMouseDown={e => valchange(true)} onChange={e => projecturlchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="card-title" style={{ "fontSize": "20px" }}>
                                        <p>Skills</p>
                                    </div>
                                    <div className="col-lg-12">

                                        <label>Enter 3 skills</label>
                                        <input type="text" required value={skill1} onMouseDown={e => valchange(true)} onChange={e => skill1change(e.target.value)} className="form-control"></input>
                                        <div className="col-lg-12">

                                            <input type="text" required value={skill2} onMouseDown={e => valchange(true)} onChange={e => skill2change(e.target.value)} className="form-control"></input>
                                        </div><div className="col-lg-12">

                                            <input type="text" required value={skill3} onMouseDown={e => valchange(true)} onChange={e => skill3change(e.target.value)} className="form-control"></input>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                        <label className="form-check-label">Actively looking for job change</label>

                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Save</button>
                                        <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>



                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default UserCreate;
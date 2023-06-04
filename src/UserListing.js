import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserListing.css";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail1 = (id) => {
        navigate("/list/user/detail1/" + id);
    }
    const LoadDetail2 = (id) => {
        navigate("/list/user/detail2/" + id);
    }
    const LoadDetail3 = (id) => {
        navigate("/list/user/detail3/" + id);
    }
    const LoadDetail4 = (id) => {
        navigate("/list/user/detail4/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/list/user/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("/api/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("/api").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <>
            <div>
                <div className="container" >
                    <div className="card">
                        <div className="card-title">
                            <h2>User Listing</h2>
                            <p>Are you ready to make a lasting impression with your resume? Look no further! ResumeBuilder.com is your one-stop destination for creating professional, eye-catching resumes that capture the attention of hiring managers and land you the job you've always dreamt of.</p>
                        </div>
                        <div className="card-body">
                            <div className="divbtn">
                                <Link to="user/create" className="btn btn-success">Add New (+)</Link>
                            </div>
                            <table className="table table-bordered" style={{ "background-color": "green" }}>
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        {/* <td>Phone</td> */}
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>

                                    {empdata &&
                                        empdata.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                {/* <td>{item.phone}</td> */}
                                                <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                                    <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                                    <a onClick={() => { LoadDetail1(item.id) }} className="btn btn-primary">Generate CV 1</a>
                                                    <a onClick={() => { LoadDetail2(item.id) }} className="btn btn-primary">Generate CV 2</a>
                                                    <a onClick={() => { LoadDetail4(item.id) }} className="btn btn-primary">Generate CV 3</a>
                                                    {/* <a onClick={() => { LoadDetail4(item.id) }} className="btn btn-primary">Generate CV 4</a> */}
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>

                            </table>
                            <div className="divbtn">
                                <Link to="/" className="btn btn-success">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmpListing;
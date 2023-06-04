
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import Banner from '../images/Banner.webp';
import '../styles/HomeStyles.css';
const Home = () => {
    return (
        <Layout>
            <div className='home' style={{ backgroundImage: `url(${Banner})` }}>
                <div className="Container" >
                    <h1>Welcome to ResumeStore - Your Gateway to a Powerful Resume!</h1>
                    <div style={{ "textAlign": "center", "placeItems": "center", "margin": "50px" }}><p>Your journey to a successful career begins here. Take the first step towards your dream job by signing up today and experiencing the power of a professionally crafted resume.

                    </p></div>


                    <Link to="/list" className="btn btn-warning">Click Now</Link>
                </div>

                {/* <div className="Containerf" >
                    <p>We understand that crafting a winning resume can be a daunting task. That's why we've designed a user-friendly platform that simplifies the entire process. Whether you're a recent graduate taking your first step into the professional world or a seasoned executive looking to take your career to new heights, our comprehensive range of tools and templates caters to every individual's unique needs.</p>
                </div> */}
                {/* <div className="headerContainer" >
                    <h1>Resume Website</h1>
                    <p>Best Resume Are Here </p>


                    <Link to="/list" className="btn btn-primary">Click Now</Link>



                </div> */}

            </div>
        </Layout >

    )
}

export default Home

import { Link } from "react-router-dom";

const HomePage = (props) => {
    return (
      <main className="page">
        <div className="window">
          <div id="homepage">
            <h1 className="name">
              About
            </h1>
            <br/>
              <p>
                Here you can search through all the Villagers of Animal Crossing. <br/>
                Please <Link to="/signup">Signup</Link> or <Link to="/login">Login</Link> to view the Villagers and information about them.
              </p>
          </div>
        </div>
      </main>
    );
};
  
export default HomePage;



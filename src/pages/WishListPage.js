import { Link } from "react-router-dom";

const WishListPage = (props) => {
    return (
      <main className="page">
        <div className="window">
          <div id="homepage">
            <h1 className="name">Wish List</h1> <br/>
                <p>
                    View the Villagers you want to add to your island. Once you have added them to your Island, you can delete them here. <br /><br />
                    View all <Link to="/villagers">Villagers</Link>.
                </p>
          </div>
        </div>
      </main>
    );
};
  
export default WishListPage;
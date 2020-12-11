import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/userService";
export default function LoginPage(props) {

        const [ formState, setFormState ] = useState({
            email: "",
            password: ""
        });

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(event) {
      event.preventDefault(); // disable default behavior
      if(!formValid()) return;  // make sure form is valid
      try {
          await login(formState)
          props.handleSignupOrLogin();
      } catch (error) {
          alert(error.message);
      }
  }

    function formValid() {
        return !!(formState.email && formState.password);
    }
    return (
        <main className="page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <div className="col-sm-12">
                        <input onChange={handleChange} value={formState.email} name="email" placeholder="Email" className="form-control" type="email"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input onChange={handleChange} value={formState.password} name="password" placeholder="Password" className="form-control" type="password"/>
                    </div>
                </div>
                <div className="form-group" id="submit">
                    <div className="col-sm-12">
                        <input disabled={!formValid()} value="Login" className="form-control" type="submit"/>
                        {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                        <Link to="/" className="cancel">Cancel</Link>
                    </div>
                </div>
            </form>
        </main>
    );
};
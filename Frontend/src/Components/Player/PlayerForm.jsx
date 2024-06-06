// Import necessary libraries
import { useRef } from "react";
import axios from "axios";

// Define the PlayerForm component
const PlayerForm = () => {
    // Define references for each input field
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const teamRef = useRef(null);
    const strengthRef = useRef(null);
    const enduranceRef = useRef(null);
    const abilityRef = useRef(null);
    const techniquesRef = useRef(null);
    const tacticalRef = useRef(null);

    // Function to handle form submission
    const submitPlayer = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Send a POST request to the server with the form data
        axios.post("http://localhost:4000/players", {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            team: teamRef.current.value,
            strength: strengthRef.current.value,
            endurance: enduranceRef.current.value,
            ability: abilityRef.current.value,
            techniques: techniquesRef.current.value,
            tactical: tacticalRef.current.value
        })
            .then((response) => console.log(response)) // Log the server response
            .catch((error) => console.log(error)); // Log any errors
    };

    // Return the JSX for the form
    return (
        <div className="row">
            <h1 className="center">Add a new player</h1>
            <form className="col s12" onSubmit={submitPlayer}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="firstName" ref={firstNameRef} type="text" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastName" ref={lastNameRef} type="text" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="phone" ref={phoneRef} type="text" />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" ref={emailRef} type="text" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="team" ref={teamRef} type="text" />
                        <label htmlFor="team">Team</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="strength" ref={strengthRef} type="number" />
                        <label htmlFor="strength">Strength</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="endurance" ref={enduranceRef} type="number" />
                        <label htmlFor="endurance">Endurance</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="ability" ref={abilityRef} type="number" />
                        <label htmlFor="ability">Ability</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="techniques" ref={techniquesRef} type="number" />
                        <label htmlFor="techniques">Techniques</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="tactical" ref={tacticalRef} type="number" />
                        <label htmlFor="tactical">Tactical</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Add Player</button>
            </form>
        </div>
    );
}

// Export the PlayerForm component as the default export of this module
export default PlayerForm;

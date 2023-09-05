import { useState } from "react";
import { Props } from "../types/type";

const User = () => {
    // We use type assertion with "{} as Props" to set the default value as an empty object of type 'Props'
    const [User, setUser] = useState<Props>({} as Props);

    return (
        <>
            {/* Button to set 'User' state with an email and password */}
            <button onClick={() => setUser({ email: "my1326545@gmail.com", password: "1234567" })}> Login </button>

            {/* Button to set 'User' state to an empty object of type 'Props', effectively logging out */}
            <button onClick={() => setUser({} as Props)}> Logout </button>

            {/* Display the email property of 'User' */}
            <h2>{User.email}</h2>

            {/* Display the password property of 'User' */}
            <h3>{User.password}</h3>
        </>
    );
}

export default User;

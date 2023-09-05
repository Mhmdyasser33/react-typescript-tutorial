import { useState } from "react";
import { Props } from "../types/type";

const User = () => {

    const [User, setUser] = useState<null | Props>(null);

    return (
        <>
            {/* Button to set 'User' state with an email and password */}
            <button onClick={() => setUser({ email: "my1326545@gmail.com", password: "1234567" })}> Login </button>

            {/* Button to set 'User' state to null, effectively logging out */}
            <button onClick={() => setUser(null)}> Logout </button>

            {/* Display the email property of 'User' if it exists, using optional chaining */}
            <h2>{User?.email}</h2>

            {/* Display the password property of 'User' if it exists, using optional chaining */}
            <h3>{User?.password}</h3>
        </>
    );
}

export default User;

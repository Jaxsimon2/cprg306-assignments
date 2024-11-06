"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page(){
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

const login = async () => {
    await gitHubSignIn();
}

const logout = async () => {
    await firebaseSignOut();
}

    return(
        <main>
            <h1>Week 9 Assignment</h1>

            <div>
                {user ? (
                    <div>
                        <p> Welcome, {user.displayName}!</p>
                        <button onClick={logout}>Logout</button>
                    </div>
                ): (
                    <button onClick={login}>Login with GitHub</button>
                )}
                
            </div>
        </main>
    );
}
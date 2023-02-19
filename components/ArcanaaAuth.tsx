import react from "react";
import { Auth, useAuth } from "@arcana/auth-react";
import Router from "next/router";

const ArcanaaAuth = () => {
  const onLogin = () => {
    // Route to authenticated page
    Router.push("/reward");
  };
  const auth = useAuth();
  return (
    <>
        <h1>hello</h1>
        <div>
          {auth.loading ? (
            "Loading"
          ) : auth.isLoggedIn ? (
            <p>Logged In</p>
          ) : (
            <div>
              <Auth externalWallet={true} theme={"light"} onLogin={onLogin} />
            </div>
          )}
        </div>

    </>
  );
};

export default ArcanaaAuth;

import React, { useState } from "react";

//Create Component PrivatePage
function PrivatePageAdmin(props) {
  return (
    <>
      <h1>Hello Admin Spongebob</h1>
      <img src="https://www.greenscene.co.id/wp-content/uploads/2021/01/spongebob-1-696x497.jpg" alt="spongebob" />
      <button onClick={props.onSignout}>Sign Out</button>
    </>
  );
}

function PrivatePageUser(props) {
  return (
    <>
      <h1>Hello User Patrick</h1>
      <img src="https://www.greenscene.co.id/wp-content/uploads/2021/01/spongebob-1-696x497.jpg" alt="spongebob" />
      <button onClick={props.onSignout}>Sign Out</button>
    </>
  );
}

//Create Component GuestPage
function GuestPage(props) {
  return (
    <>
      <h1>Please Signin</h1>
      <button onClick={props.onSignin}>Sign In</button>
    </>
  );
}

function ConditionRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  const handleSignin = () => {
    setIsLoggedIn(true);
  };
  const handleSignout = () => {
    setIsLoggedIn(false);
  };

  const renderPage = () => {
    if (isLoggedIn) {
      if (isAdmin) {
        return <PrivatePageAdmin onSignout={handleSignout} />;
      } else {
        return <PrivatePageUser onSignout={handleSignout} />;
      }
    } else {
      return <GuestPage onSignin={handleSignin} />;
    }
  };

  return (
    // Code Inside div
    <div className="app">
      {isLoggedIn ? (
        <>{isAdmin ? <PrivatePageAdmin onSignout={handleSignout} /> : <PrivatePageUser onSignout={handleSignout} />}</>
      ) : (
        <GuestPage onSignin={handleSignin} />
      )}
    </div>
  );
}

export default ConditionRendering;

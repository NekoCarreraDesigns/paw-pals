import React from "react";
import "./style.css";

function LogoutMessage() {
  return (
    <div>
      <div className='outer-log-out-message-card'>
        <div className='inner-log-out-message-card'>
          <h1 className='log-out-message-header'>
            You have successfully logged out!
          </h1>
          <p className='log-out-message-paragraph'>
            We're sad to see you go, however we are happy that you chose to use
            Puppy Pals, thanks for your support! Remember to have fun and stay
            safe! Come back soon!
          </p>
        </div>
      </div>
    </div>
  );
}
export default LogoutMessage;

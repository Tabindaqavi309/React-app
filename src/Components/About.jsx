import React from "react";

function About(props) {
  console.log(props);
  return (
    <div>
      This is About page
      <br />
      <button
        onClick={() => {
          props.history.push("/");
        }}
      >
        Go to home
      </button>
      <button
        onClick={() => {
          //props.history.push("/contact");             //after getting response you can redirect back to dashboard
          setTimeout(() => {
            props.history.push("/contact");
          }, 5000);
        }}
      >
        Go to Contact
      </button>
    </div>
  );
}

export default About;

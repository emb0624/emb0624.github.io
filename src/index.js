// js dependencies
import React from "react";
import ReactDOM from "react-dom";

// components
import Header from "./Header.jsx";
import About from "./About.jsx";
import Quote from "./Quote.jsx";
import ContentA from "./ContentA.jsx";
import ContentB from "./ContentB.jsx";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";

// css dependencies
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Quote />
      <ContentA
        title={`Micro Front-Ends`}
        link={`https://github.com/embengineering/micro-front-ends-web-tools`}
        description={`A set of experiments about Micro Front-Ends using different
            methodologies for integration. The primary vision is to have a clean
            separation for developers to deploy and work in isolation faster.`}
        imageUrl={`https://res.cloudinary.com/embengineering/image/upload/v1523920490/micro-front-end-web-tools.gif`}
        imageTarget={`http://embengineering.com/micro-front-ends-web-tools`}
      />
      <ContentB
        title={`ROCK Goals Dashboard`}
        link={`https://github.com/embengineering/kyfl`}
        description={`Interactive dashboard using React, Redux, Firebase and Google
            Authentication.`}
        imageUrl={`https://res.cloudinary.com/embengineering/image/upload/v1523919947/thumbnail-rock-goals.png`}
        imageTarget={`http://embengineering.com/kyfl`}
      />
      <ContentA
        title={`React and Redux (Small Tutorial)`}
        link={`https://github.com/embengineering/react-redux-starting-kit`}
        description={`A step-by-step tutorial for building a quick dashboard using Material Design Lite, React and Redux.`}
        imageUrl={`https://res.cloudinary.com/embengineering/image/upload/v1523919947/writing-react-component.gif`}
        imageTarget={`https://github.com/embengineering/react-redux-starting-kit`}
      />
      <ContentB
        title={`React CRUD Example (Google Material Design)`}
        link={`https://github.com/embengineering/react-md-crud`}
        description={
          <div>
            A React CRUD example using Google Material Design (
            <a href="http://www.material-ui.com">Material-UI</a>), Webpack and
            Firebase.
          </div>
        }
        imageUrl={`https://res.cloudinary.com/embengineering/image/upload/v1523919946/thumbnail-react-md-crud.png`}
        imageTarget={`https://embengineering-react-md-crud.herokuapp.com`}
      />
      <ContentA
        title={`Employee Directory`}
        link={`https://github.com/embengineering/employee-directory`}
        description={`Employee directory built on Web API 2, Entity Framework 6, Angular JS, Bootstrap, and Kendo UI. It uses TOKEN authorization for security.`}
        imageUrl={`https://res.cloudinary.com/embengineering/image/upload/v1523919947/thumbnail-employee-directory.gif`}
        imageTarget={`https://github.com/embengineering/employee-directory`}
      />
      <Banner />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/Soorya018"
          aria-label="My GitHub"
        >
          Arun Soorya
        </a>{" "}
        
        <p>
          <small className="text-muted">
            Spread Love.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center">
        <img
          className="mb-4 bootstrap-logo"
          src="https://i.pinimg.com/originals/8d/2d/1c/8d2d1c5e0ee9e5141f1fc51567dba572.png"
          alt="Bootstrap 5"
        ></img>
        <h1 className="mp-3 fs-3 fw-normal">Please sign in</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control
            type="email"
            size="lg"
            placeholder="Email address"
            autoComplete="user name"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group controlId="sign-in-password-address" className="mb-3">
          <Form.Control
            type="password"
            size="lg"
            placeholder="password"
            autoComplete="current-password"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group
          controlId="remember-me"
          className="d-flex justify-content-center mb-4"
        >
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" size="lg">
            Sign in
          </Button>
        </div>
        <p className="mt-3 text-muted">&copy; 2022-2023</p>
      </Form>
    </Container>
  );
}

export default App;

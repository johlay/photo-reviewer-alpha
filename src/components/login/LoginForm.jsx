import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthErrorBox from "../partials/AuthErrorBox";

const LoginForm = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center text-light py-3">Login</h2>
      {error && <AuthErrorBox error={error} />}
      <Form onSubmit={handleLogin}>
        <Form.Group id="email" className="mb-3">
          <Form.Label className="text-light">Email</Form.Label>
          <Form.Control type="email" ref={emailRef} required />
        </Form.Group>

        <Form.Group id="password" className="mb-3">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} required />
        </Form.Group>

        <div className="d-grid gap-2 my-4">
          <Button disabled={loading} type="submit" variant="dark">
            Login
          </Button>
        </div>
        <hr className="bg-light my-4" />

        <p className="text-center text-light">
          Not a member at Photo Reviewer Alpha?{" "}
          <Link className="text-light" to="/register">
            Register now
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginForm;

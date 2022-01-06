import { useRef, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthErrorBox from "../partials/AuthErrorBox";
import ConfirmAccountModal from "./ConfirmAccountModal";

const RegistrationForm = () => {
  const fullnameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { register, userDisplayNameRegistration } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // set loading to true during validation process
    setLoading(true);

    // check if passwords matches each other
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Passwords doesn't match each other");

      return setLoading(false);
    }

    register(emailRef.current.value.trim(), passwordRef.current.value.trim())
      .then((userCredential) => {
        // if registration was successful, make sure to register user's display name as well.
        if (userCredential) {
          userDisplayNameRegistration(fullnameRef.current.value.trim())
            .then(() => {
              // show modal which confirms successful registration
              setShowModal(true);
            })
            .catch((error) => {
              // an error occured while trying to update profile's display name after registration
              setError(error.message);
            })
            .finally(() => {
              // set loading to false, despite the outcome.
              return setLoading(false);
            });
        } else {
          // if an unexpected error occured and no userCredential data was found, show error message
          setError("An error occured. Please try again.");

          return setLoading(false);
        }
      })
      .catch((error) => {
        setError(error.message);

        return setLoading(false);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center text-light py-3">Registration</h2>
      {error && <AuthErrorBox error={error} />}
      <Form onSubmit={handleSubmit}>
        <Form.Group id="full-name" className="mb-3">
          <Form.Label className="text-light">Full name</Form.Label>
          <Form.Control type="text" ref={fullnameRef} required />
        </Form.Group>

        <Form.Group id="email" className="mb-3">
          <Form.Label className="text-light">Email</Form.Label>
          <Form.Control type="email" ref={emailRef} required />
        </Form.Group>

        <Form.Group id="password" className="mb-3">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} required />
        </Form.Group>

        <Form.Group id="confirm-password" className="mb-3">
          <Form.Label className="text-light">Confirm password</Form.Label>
          <Form.Control type="password" ref={confirmPasswordRef} required />
        </Form.Group>

        <hr className="bg-light my-4" />

        <div className="d-grid gap-2">
          <Button disabled={loading} type="submit" variant="dark">
            Register now
          </Button>
        </div>
      </Form>

      <ConfirmAccountModal showModal={showModal} />
    </div>
  );
};

export default RegistrationForm;

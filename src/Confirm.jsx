import { useNavigate } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>Thank you for subscribing to our newsletter</h2>
      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default Confirm;

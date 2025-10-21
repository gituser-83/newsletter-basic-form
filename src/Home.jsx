import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [mail, setMail] = useState("");
  const [type, setType] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirm");
  };

  const buttonVisibility = !mail || !type ? { display: "none" } : {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            required
            value={mail}
            placeholder="email..."
            onChange={(e) => setMail(e.target.value)}
          />
        </label>
        <label htmlFor="type">
          Daily{" "}
          <input
            required
            type="radio"
            name="type"
            value="daily"
            onChange={() => setType("daily")}
          />
          Weekly{" "}
          <input
            required
            type="radio"
            name="type"
            value="weekly"
            onChange={() => setType("weekly")}
          />
        </label>
        <label htmlFor="name">
          Name(optional):{" "}
          <input
            type="text"
            placeholder="Your name..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <button type="submit" style={buttonVisibility}>
          Subscribe
        </button>
      </form>
    </>
  );
};

export default Home;

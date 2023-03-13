import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetworks.sass";

const socialNetwork = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetwork = () => {
  return (
    <div id="social-networks">
      {socialNetwork.map((network) => (
        <a href="" className="social-btn" id={network.name} key={network.name}>
          {" "}
          {network.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialNetwork;

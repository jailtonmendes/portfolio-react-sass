import Avatar from '../img/perfil.png';
import '../styles/components/sidebar.sass';
import InformationContainer from './informationContainer';
import SocialNetwork from './SocialNetword';

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="" />
    <p className="title">Desenvolvedor Front-end</p>
    <SocialNetwork />
    <InformationContainer/>
    <div className="download">
      <a href="" className="btn">Download Currículo</a>
    </div>
  </aside>;
};

export default Sidebar;

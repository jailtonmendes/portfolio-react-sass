import { AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'
import "../styles/components/informationContainer.sass";


const InformationContainer = () => {
  return <section id='information'>
      <div className="infor-card">
        <AiFillPhone id='phone-icon' />
        <div>
            <h3>Telefone</h3>
            <p>(81)98854-4790</p>
        </div>
      </div>
      <div className="infor-card">
        <AiOutlineMail id='email-icon' />
        <div>
            <h3>E-mail</h3>
            <p>jailtonmendes.silva@gmail.com</p>
        </div>
      </div>
      <div className="infor-card">
        <AiFillEnvironment id='pin-icon' />
        <div>
            <h3>Localização</h3>
            <p>Recife - PE</p>
        </div>
      </div>
  </section>;
};

export default InformationContainer;
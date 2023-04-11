import './footer.css';

interface FooterProps {
  info: {
    name: string;
    email: string;
    phone: string;
    telegram: string;
    wishes?: string;
  };
}

const Footer: React.FC<FooterProps> = ({ info }) => {
  return (
    <div className="footer">
      <div className="footer-description">
        Developed by virtual museum {info.name}.<br />
        Conatct me:
      </div>
      <ul className="footer-list">
        <li className="footer-list-item">Email: {info.email}</li>
        <li className="footer-list-item">Phone: {info.phone}</li>
        <li className="footer-list-item">Telegram: {info.telegram}</li>
      </ul>
      {info.wishes && <div className="footer-wishes">{info.wishes}</div>}
    </div>
  );
};

export default Footer;

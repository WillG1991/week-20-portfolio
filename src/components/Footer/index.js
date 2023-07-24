import React from "react";
import { LinkedIn } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import { Folder } from '@material-ui/icons';

function Footer() {
  return (
    <section className="footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid white', paddingTop: '20px', paddingBottom: '20px' }}>
      <section style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a href="https://www.linkedin.com/in/william-gehrke-1a33591a3/" target="_blank" rel="noopener noreferrer">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LinkedIn style={{ fontSize: 30 }} alt="linkedin icon" />
            <span>LinkedIn</span>
          </div>
        </a>
      </section>
      <section style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a href="mailto:williamgehrke@gmail.com" target="_blank" rel="noopener noreferrer">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Email style={{ fontSize: 30 }} alt="email icon" />
            <span>Contact Me</span>
          </div>
        </a>
      </section>
      <section style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a href="https://drive.google.com/file/d/1gkvsJcNR_Fp4rfTqoeRPieXlbPtEllwk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Folder style={{ fontSize: 30 }} alt="folder icon" />
            <span>See My Resume</span>
          </div>
        </a>
      </section>
    </section>
  );
}

export default Footer;
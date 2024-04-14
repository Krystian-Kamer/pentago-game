import { GrLinkedin } from 'react-icons/gr';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
      <p>
        Hello, this is a <span className='about-game'>pentago game</span>. My
        name is
        <span className='about-author'> Krystian Kamer</span>. I have been
        passionate about board games since childhood and for the past two years
        <span> programming</span>.
      </p>
      <p className='about-idea'>
        I have this game on the shelf and I really wanted to replicate its
        mechanism. I created the game from scratch, using HTML, CSS and React.
      </p>
      <div className='about-links'>
        <a
          className='about-link'
          target='_blank'
          href='https://www.linkedin.com/in/krystian-kamer-0aa148279/'
        >
          <GrLinkedin className='about-icon' />
          <span>linkedIn</span>
        </a>
        <a
          className='about-link'
          target='_blank'
          href='https://github.com/Krystian-Kamer'
        >
          <FaSquareGithub className='about-icon' />
          <span>github</span>
        </a>
        <div className='about-link'>
          <FaPhoneSquareAlt className='about-icon' />
          <span>666 660 128</span>
        </div>
      </div>
    </div>
  );
};
export default About;

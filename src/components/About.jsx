import { GrLinkedin } from 'react-icons/gr';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaPhoneSquareAlt } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <p>
        Hello, this is a pentago game. My name is{' '}
        <span style={{ fontWeight: 'bold' }}>Krystian Kamer</span>. I have been
        passionate about board games since childhood and for the past two years
        <span style={{ fontWeight: 'bold' }}> programming</span>.
      </p>
      <p style={{ marginTop: '10px' }}>
        I have this game on the shelf and I really wanted to replicate its
        mechanism. I created the game from scratch, using HTML, CSS and React.
      </p>
      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <a
          style={{
            color: 'black',
            fontWeight: 'bold',
          }}
          target='_blank'
          href='https://www.linkedin.com/in/krystian-kamer-0aa148279/'
        >
          <GrLinkedin />
          <span style={{ marginLeft: '5px' }}>linkedIn</span>
        </a>
        <a
          style={{
            color: 'black',
            fontWeight: 'bold',
          }}
          target='_blank'
          href='https://github.com/Krystian-Kamer'
        >
          <FaSquareGithub />
          <span style={{ marginLeft: '5px' }}>github</span>
        </a>
        <div
          style={{
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          <FaPhoneSquareAlt />
          <span style={{ marginLeft: '5px' }}>666 660 128</span>
        </div>
      </div>
    </>
  );
};
export default About;

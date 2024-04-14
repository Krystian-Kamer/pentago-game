import './Rules.css';

const Rules = () => {
  return (
    <div className='rules-container'>
      <p>
        To win you must have five balls of the same color next to each other in
        a row, column or diagonally.
      </p>
      <p className='two-steps'>In each turn you do two things:</p>
      <p>1. Place a ball</p>
      <p>2. Rotate one of four boards</p>
      <p className='repeat'>
        If no one won then the next player goes, have fun
      </p>
    </div>
  );
};
export default Rules;

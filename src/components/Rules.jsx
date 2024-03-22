const Rules = () => {
  return (
    <>
      <p>
        To win you must have five balls of the same color next to each other in
        a row, column or diagonally.
      </p>
      <p style={{ fontWeight: 'bold' }}>In each turn you do two things:</p>
      <p>1. Place a ball</p>
      <p>2. Rotate one of four board</p>
      <p style={{ margin: '7px auto' }}>
        If no one won then the next player goes, that's all
      </p>
    </>
  );
};
export default Rules;

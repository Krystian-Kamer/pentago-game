const Options = () => {
  return (
    <form>
      {/* here I must add who goes first and then what color player wants */}
      <p>Who goes first?</p>
      <div style={{ display: 'flex' }}>
        <p> Player one color:</p>
        <select>
          <option value='1'>blue</option>
          <option value='2'>red</option>
          <option value='3'>green</option>
          <option value='4'>yellow</option>
          <option value='5'>black</option>
          <option value='6'>white</option>
        </select>
      </div>
      <div style={{ display: 'flex' }}>
        <p> Player one color:</p>
        <select>
          <option value='1'>blue</option>
          <option value='2'>red</option>
          <option value='3'>green</option>
          <option value='4'>yellow</option>
          <option value='6'>white</option>
        </select>
      </div>
    </form>
  );
};
export default Options;

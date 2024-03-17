export const sortSlots = (array) => {
  const sortedBoard = [
    [
      { a1: array[0][0] },
      { a2: array[0][1] },
      { a3: array[0][2] },
      { b1: array[0][3] },
      { b2: array[0][4] },
      { b3: array[0][5] },
      { c1: array[0][6] },
      { c2: array[0][7] },
      { c3: array[0][8] },
    ],
    [
      { a4: array[1][0] },
      { a5: array[1][1] },
      { a6: array[1][2] },
      { b4: array[1][3] },
      { b5: array[1][4] },
      { b6: array[1][5] },
      { c4: array[1][6] },
      { c5: array[1][7] },
      { c6: array[1][8] },
    ],
    [
      { d1: array[2][0] },
      { d2: array[2][1] },
      { d3: array[2][2] },
      { e1: array[2][3] },
      { e2: array[2][4] },
      { e3: array[2][5] },
      { f1: array[2][6] },
      { f2: array[2][7] },
      { f3: array[2][8] },
    ],
    [
      { d4: array[3][0] },
      { d5: array[3][1] },
      { d6: array[3][2] },
      { e4: array[3][3] },
      { e5: array[3][4] },
      { e6: array[3][5] },
      { f4: array[3][6] },
      { f5: array[3][7] },
      { f6: array[3][8] },
    ],
  ];
  return sortedBoard.flat().sort((a, b) => {
    const keyA = Object.keys(a)[0];
    const keyB = Object.keys(b)[0];
    return keyA.localeCompare(keyB);
  });
};

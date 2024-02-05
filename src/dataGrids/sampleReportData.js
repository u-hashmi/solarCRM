function generateRandomData(numRows) {
    const data = [];
    const suppliers = ['MUGHAL', 'ITEHAD'];
  
    for (let i = 1; i <= numRows; i++) {
      const row = {
        id: i,
        ITEMS: `Item ${i}`,
        SUPPLIER_NAME: suppliers[Math.floor(Math.random() * suppliers.length)],
        Date: getRandomDate(),
        'P.ID': getRandomNumber(10000),
        SIZE: '18G',
        QTY: getRandomNumber(600),
        'W/KG': getRandomDecimal(2, 1),
        'T.W': getRandomNumber(20000),
        Rft: getRandomNumber(1000),
        '%AGE': getRandomDecimal(2, 1),
        'P.PR/UNIT': getRandomNumber(3000),
        'L.EXP': getRandomDate(),
        TOTAL: getRandomNumber(5000000),
      };
      data.push(row);
    }
  
    return data;
  }
  
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  function getRandomDecimal(max, min) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }
  
  function getRandomDate() {
    const startDate = new Date('2020-01-01');
    const endDate = new Date();
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return randomDate.toISOString().split('T')[0];
  }
  
  const numRows = 50; // You can change this to the desired number of rows
  const generatedData = generateRandomData(numRows);

  export default generatedData;
  
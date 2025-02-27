import { useEffect, useState } from 'react';


function usecurencyRates(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?base=${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res['rates']))
      .catch((rej) => console.log(rej));
  }, [currency,]);

  return data;
}

export default usecurencyRates;

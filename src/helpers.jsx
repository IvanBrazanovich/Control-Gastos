export const formatCurrency = (presupuesto) => {
  const options = {
    style: "currency",
    currency: "USD",
  };
  const numberFormater = new Intl.NumberFormat("en-US", options);
  const number = numberFormater.format(presupuesto);

  return number;
};

export const generateId = () => {
  const first = Math.random(40).toString(36);
  const dateSecond = Date.now().toString(36);

  return first.slice(2) + dateSecond;
};

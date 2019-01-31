const pad = d => (d < 10 ? `0${d.toString()}` : d.toString());

const timeConverter = (milliseconds) => {
  const a = new Date(milliseconds);
  const year = a.getFullYear();
  const month = a.getMonth() + 1;
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const time = `${month}/${date}/${year} - ${pad(hour)}:${pad(min)}`;
  return time;
};

export default timeConverter;

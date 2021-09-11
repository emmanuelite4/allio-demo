const randomColor = (num: number) => {
  let colors = [];
  for (let i = 0; i < num; i++) {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    colors.push(`rgb(${r}, ${g}, ${b})`);
  }
  return colors;
};

export default randomColor;

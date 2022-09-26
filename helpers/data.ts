const month: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const dataCreate = `${
  month[new Date().getMonth()]
}, ${new Date().getDate()}, ${new Date().getFullYear()}`;
export const dataChangeNote = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;

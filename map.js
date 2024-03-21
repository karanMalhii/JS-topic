const names = [
  { name: "Sonny", likes: "Coding" },
  { name: "Jay", likes: "Gaming" },
  { name: "Elon", likes: "Tesla" },
];

const newNames = names.map((item) => ({
  [item.name]: item.likes,
  noOfItemInName: item.name.length,
}));
console.log(newNames);

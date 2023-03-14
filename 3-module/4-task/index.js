function showSalary(users, age) {
  // ваш код...
  let str = '';
  users.forEach(user => {
    if (user.age <= age) {
      str += `${user.name}, ${user.balance}\n`;
    }
  });
  return str
    .split("\n")
    .filter((item) => item !== "")
    .join("\n");
}



function showSalary(users, age) {
  let str = users.filter(user => user.age <= age).map(user => user.name + ', ' + user.balance).join('\n').trim();
  console.log(str.length);
  return str;
}




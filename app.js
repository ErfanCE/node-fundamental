const fs = require('node:fs');

fs.readFileSync('./info.txt', 'utf-8', (err, usersData) => {
  if (!!err) return console.log(err.message);

  const users = usersData.split('\n');
  console.log(users);
});

fs.readFile('./text.txt', 'utf-8', (err, data) => {
  if (!!err) return console.log(err.message);

  console.log(data);
});

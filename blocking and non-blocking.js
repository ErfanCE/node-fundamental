// * Modules: Core Modules, Local Modules, Third-party Modules

const fs = require('node:fs');

// * read(sync-blocking)
// console.log('start reading file ...');
try {
  const result = fs.readFileSync('./tet.txt', 'utf-8'); // blocking code
} catch (error) {
  console.log(error.message);
}
// console.log('reading file completed.');

// * write
// fs.writeFileSync('./text.txt', 'start learning node.js');

// * non-blocking-async

console.log('start reading file ...');
fs.readFile('./tet.txt', 'utf-8', (err, data) => {
  if (err) return console.log(err);

  console.log(data);
});
console.log('reading file completed.');

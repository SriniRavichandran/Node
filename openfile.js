var fs = require('fs');


fs.open('.content.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});


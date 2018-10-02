const escape = require('html-escape');
const fs = require('fs');

const html = fs.readFileSync('./dist/index.html');
if (html) {
  fs.writeFileSync('./dist/escaped.index.html', escape(html));
}
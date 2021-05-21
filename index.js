const express = require('express');
const mjml2html = require('mjml');
// const handlebars = require('express-handlebars');
const handlebars = require('handlebars');
const hb = require('./template');
// import hbsTemplate from './template';
const app = express();
const port = 3000;
app.set('view engine', 'html');
// app.set('view engine', 'handlebars');
// app.engine(
// 	'handlebars',
// 	handlebars({
// 		layoutsDir: __dirname + '/views/layouts'
// 	})
// );
app.use(express.static('public'));

const template = handlebars.compile(hb.hbsTemplate);
const requestData = {
	id: 1,
	service: 'Sample Request'
};
const options = {};
const mjml = template(requestData);
const htmlRow = mjml2html(mjml, options);

console.log('--------------------------------------');
console.log(htmlRow.html);
console.log('--------------------------------------');

app.get('/', (req, res) => {
	res.send(htmlRow.html);
});
const htmlOutput = mjml2html(mjml, options);
app.listen(port, () => console.log(`App listening to port ${port}`));

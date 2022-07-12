const express = require('express');
const mjml2html = require('mjml');
const handlebars = require('handlebars');
const hb = require('./template');
const app = express();
const port = 3000;
app.set('view engine', 'html');
app.use(express.static('public'));
handlebars.registerHelper('formatDate', function (isoDate) {
	date = new Date(isoDate);
	return `${date.toLocaleDateString(
		'en-US'
	)} ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
});

const template = handlebars.compile(hb.hbsTemplate);

const colorPattern = [
	{
		bgColor: '#009FD1'
	},
	{
		bgColor: '#D100BC'
	},
	{
		bgColor: '#00B628'
	},
	{
		bgColor: '#EA7101'
	}
];
let requestData = {
	assignee: {
		id: 'WZo6YLJNmg',
		name: 'sanjay_admin',
		mobile: '9562850875',
		userType: 'department-admin'
	},
	assignor: {
		id: 'WZo6YLJNmg',
		name: 'sanjay_admin',
		mobile: '9562850875',
		userType: 'department-admin'
	},
	cancelledAt: null,
	cancelledUser: null,
	comments: [
		{
			commenter: {
				id: 'WZo6YLJNmg',
				name: 'sanjay_admin',
				mobile: '9562850875',
				userType: 'department-admin'
			},
			comments: 'note-3',
			createdAt: '2021-05-25 13:31:45.355+05:30',
			id: '09XN2ZMNqb'
		},
		{
			commenter: {
				id: 'WZo6YLJNmg',
				name: 'sanjay_admin',
				mobile: '9562850875',
				userType: 'department-admin'
			},
			comments: 'note-2',
			createdAt: '2021-05-25 13:31:45.355+05:30',
			id: '09XN2ZMNqb'
		},
		{
			commenter: {
				id: 'WZo6YLJNmg',
				name: 'sanjay_admin',
				mobile: '9562850875',
				userType: 'department-admin'
			},
			comments: 'note-1',
			createdAt: '2021-05-25 13:31:45.355+05:30',
			id: '09XN2ZMNqb'
		}
	],
	completedAt: null,
	createdAt: '2021-05-14 20:21:20.564+05:30',
	department: { id: 'KWmND96o17', name: 'House Keeping' },
	eta: '2021-05-14 21:31:20.563+05:30',
	events: [],
	id: 'xwZG19XGY5',
	location: { id: 'KWmND96o17', name: 'Location 1' },
	minutesLeft: -15311,
	minutesSinceCreation: 15381,
	notes: null,
	request: 'service-esc-1',
	requestCompletedBy: null,
	requestId: 'BSTKAA0703',
	requestedAt: '2021-05-14T14:51:20.564Z',
	requestedBy: {
		id: 'WZjGeD694d',
		name: 'dept_admin',
		mobile: '9847330710',
		userType: 'department-admin'
	},
	requestedMobile: '',
	service: { id: 'Zx4NwQjGQJ', label: 'service-esc-1' },
	status: 'assigned',
	unit: {
		id: '8q6JqxAN2Y',
		name: 'asd1',
		status: 'vacant',
		room: { id: 'gxyGxdbGkB', name: 'asd2' }
	}
};

requestData.isDelayed =
	requestData.status !== 'completed' &&
	requestData.status !== 'cancelled' &&
	requestData.minutesLeft &&
	requestData.minutesLeft <= 0;

requestData.comments.forEach((element, index) => {
	requestData.comments[index].bgColor =
		colorPattern[index % colorPattern.length].bgColor;
	requestData.comments[index].avatarChar = element.commenter.name.charAt(0);
});
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

const express = require('express');
const courses = require('./courses.json')

const app = express();

app.set('view engine', 'pug');

// serve static files from the 'public folder'
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 7000)

//new
//app.engine('pug', require('pug').__express)

app.get('/', (req, res) => {
  res.render('index', {
    title: 'SJSU Class Enrollment',
    courses: courses.classes,
  });
});

app.get('/courses', (req, res) => {
  const course = courses.classes.find(p => p.id === req.query.id);
  res.render('courses', {
    title: `About ${course.name}`,
    course,
  });
});


// const server = app.listen(7000, () => {
//   console.log(`Express running → PORT ${server.address().port}`);
// 
const server = app.listen(process.env.PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});


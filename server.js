const experss = require('express');
const bodyParser = require('body-parser');
const app = experss();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) =>{
    res.send([
        {
        'id':1,
        'image': 'https://placeimg.com/64/64/any ',
        'name': '이정후',
        'birthday': '20200521',
        'gender': '남자',
        'job': '키움넥센'
        },
        {
          'id':2,
          'image': 'https://placeimg.com/64/64/2 ',
          'name': '안치홍',
          'birthday': '20200521',
          'gender': '남자',
          'job': '롯데자이언츠'
        },
        {
          'id':3,
          'image': 'https://placeimg.com/64/64/3 ',
          'name': '강백호',
          'birthday': '20200521',
          'gender': 'kt위즈',
          'job': '대학생'
        }
          
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
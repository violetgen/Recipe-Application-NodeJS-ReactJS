import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cons from 'consolidate'
import dust from 'dustjs-helpers'
import pg from 'pg'

const app = express();

var connect  = "postgres://postgres:password@localhost/recipebook";

app.engine('dust', cons.dust);

//Set default ext .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
 // console.log('Test');
 res.render('index');
});

app.listen(3000, () => {
 console.log('Server started at port 3000');
});

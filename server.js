import SourceMapSupport from 'source-map-support';
SourceMapSupport.install();
import express from 'express'
import bodyParser from 'body-parser'
import members from './routes/members'


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/members', members)

app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})

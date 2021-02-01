import Express, {NextFunction, Request, Response} from 'express'
import Mongoose from 'mongoose'
import * as path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index'
import bitcoreNodeRouter from './routes/bitcore-node'
import bitcoreWalletServiceRouter from './routes/bitcore-wallet-service'

const app = Express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// Connect mongo and set connection
Mongoose.connect('mongodb://localhost:27017/bitcore-stub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(mongoose => {
    app.set('mongooseConnection', mongoose.connection)
})

app.use(logger('dev'))
app.use(Express.json())
app.use(Express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(Express.static(path.join(__dirname, '../public')))

app.use('/', indexRouter)
app.use('/node', bitcoreNodeRouter)
app.use('/bws', bitcoreWalletServiceRouter)

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404)
    res.send(`<pre>Cannot ${req.method} ${req.url}</pre>`)
})

// error handler
app.use((err: any, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send(`<pre>Cannot ${req.method} ${req.url}</pre>`)
})

export default app

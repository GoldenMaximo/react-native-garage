import app from './app'

const port = parseInt(process.env.APP_PORT as string) || 3000

app.listen(port, () => {
    const logYellow = '\x1b[33m%s\x1b[0m';
    console.log(logYellow, `💾 running on PORT ${port}`)
})

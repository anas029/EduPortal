import express from 'express'

const app = express()
const PORT = process.env.PORT??3000
app.listen(PORT, ()=>{
    console.info(`Server is listening on http://localhost:${PORT}/\nenv: ${process.env.NODE_ENV}`);
       
})
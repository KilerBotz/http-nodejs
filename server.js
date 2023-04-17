import express from 'express';
let app = express()
 
app.get('/', (req, res) => {
res.send('Oke Bang')
})

app.listen(8000, () => {
console.log('Server Started')
})

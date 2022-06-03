const { response } = require('express');
const express = require('express')
const app = express();
const cors = require('cors')
const PORT = 8000;

app.use(cors());

const rappers = {
    '21 savage':{
        'age':29,
        'birthName':'Sheyaa Bin Abraham-Joseph',
        'birthLocation':'London, England'
    },
    'chance the rapper': {
        'age': 30,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }

}


app.get('/',(request,response)=>{

    response.sendFile(__dirname + '/index.html');
    console.log('sent index.html');

})

app.get('/api/:name', (request, response)=>{

    console.log(request.params.name)

    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
    response.json(rappers[rapperName].birthName)

    console.log(rappers[rapperName])
    }else{
        response.json(rappers['unknown'].birthName);
        console.log(rappers['unknown']);
    }

   
});

app.listen( process.env.PORT || PORT,()=>{

    console.log(`Server Now running on port ${PORT}! Betta Go Catch It!`);

});

// mkdir api - project
// cd api - project
// npm init 
// npm install express--save
// https://github.com/brandon003/rap-names-api

// heroku login
// heroku create rapper-api-100dev
// echo "web: node server.js" > Procfile
// https://rapper-api-100dev.herokuapp.com/api/
// git add. 
// git commit - m "changes"
// git push heroku main
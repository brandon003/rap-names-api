const { response } = require('express');
const express = require('express')
const app = express();
const PORT = 8000;

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

app.listen(PORT,()=>{

    console.log(`Server Now running on port ${PORT}! Betta Go Catch It!`);

});
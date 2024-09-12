
const fs =require('fs');
let MyTable = [
    'apple',
    'orange',
    'banana',
    32
]

const data = JSON.stringify(MyTable);
fs.writeFile('my_table.json',data, (err)=>{
    if(err){
        console.error(err);
    }else{
        console.log('The table has been saved in my_table');
    }
})
//Do not put same id number and make the id number large 1-9 count 



var openData = [
    {
        "id":934785981,
        "head":"Associate Consultant Audit",
        "year":"3 - 5 years",
        "loc":"Calicut",
        "day":"2 Day ago"
    },
    {
        "id":389475892,
        "head":"Associate Consultant Appsec",
        "year":"3 - 5 years",
        "loc":"Calicut",
        "day":"2 Day ago"
    },{
        "id":21312143,
        "head":"Associate Consultant Network Security",
        "year":"3 - 5 years",
        "loc":"Calicut",
        "day":"2 Day ago"
    }
    ,{
        "id":4890890,
        "head":"Anaylist",
        "year":"3 - 5 years",
        "loc":"Calicut",
        "day":"2 Day ago"
    }
    ,{
        "id":56578786,
        "head":"Senior Specialist",
        "year":"3 - 5 years",
        "loc":"Calicut",
        "day":"2 Day ago"
    }
    ,{
        "id":65675675,
        "head":"Manager",
        "year":"3 - 5 years",
        "loc":"Calicut",
        "day":"2 Day ago"
    }


]

var count = 0;
openData.map((data,index)=>{
    openData.map((data1,index1)=>{
        if(index1===index){
            
        }else{
            if(data.id=== data1.id){
                count = count + 1 
                console.log(index);
                
            }
        }
    })
})


if(count!==0){
    openData = []
}


export default openData;
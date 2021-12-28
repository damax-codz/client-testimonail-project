let clientsPics=['dami.JPG','ezz.jpg','dago.jpg']
let clientNames=['Dami','Ezra','Dago']
let clientRemark=['Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus, provident est ipsa dignissimos doloribus dolorem dolore facere odit velit voluptatibus officiis, atque dolor minus, nam natus voluptatem quam quod.',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque in ipsum sint laboriosam molestiae magni id nemo! Neque, omnis.',
'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi quos vitae beatae, molestias cum, et eum omnis velit laborum explicabo optio assumenda tempora porro.',]
let i=0
const nextUp=()=>{
    document.getElementById('name').innerHTML=clientNames[i]
    document.getElementById('imagee').src=clientsPics[i]
    document.getElementById('remark').innerText=clientRemark[i]
    if(i>=clientRemark.length-1){
        i=-1
    }
    i++

}
const back=()=>{
    document.getElementById('name').innerHTML=clientNames[i]
    document.getElementById('imagee').src=clientsPics[i]
    document.getElementById('remark').innerText=clientRemark[i]
    if(i<=0){
        i=clientRemark.length
    }
    i-=1

}

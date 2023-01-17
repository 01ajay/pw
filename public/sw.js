console.log("service worker is running in back ground");

//let payload= {card:"Indian Bank",title:"Lowest Interest Ever!!",newValue:"5%",url:""};


self.addEventListener("install",()=>{
    self.skipWaiting();
})

self.addEventListener('push',function(e){
    let payload= e.data.json();
    var options = {
        body:`${payload?.["body"]}.`,
        icon:'ib.png',
        vibrate:[100,50,100],
        data:{
            url:payload?.["url"],
            dateOfArrival:Date.now(),
            primaryKey:2,
        },
        actions:[
            {
                action:'go',
                title:'Let\'s Go',
            
            },
         
        ]
    };
    e.waitUntil(
    self.registration.showNotification(payload?.["title"],options)
    );
    
});

self.addEventListener("notificationclick",(e)=>{

    
    let payload = e.notification.data;
    if(e.action === 'go')
    {
    clients.openWindow(payload?.["url"]);
    }
   

    e.notification.close();
})

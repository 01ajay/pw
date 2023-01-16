console.log("service worker is running in back ground");

self.addEventListener("install",()=>{
    self.skipWaiting();
})

self.addEventListener('push',function(e){
    let payload= e.data.json();
    var options = {
        body:`${payload?.["product"]}.`,
        icon:'',
        vibrate:[100,50,100],
        data:{
            dateOfArrival:Date.now(),
            primaryKey:2,
        },
        actions:[
            {
                action:'explore',
                title:'Explore new ',
                icon:'',
            },
            {
                action:'close',
                title:'close ',
                icon:'',
            },
        ]
    };
    e.waitUntil(
    self.registration.showNotification(payload?.["name"],options)
    );
    
})

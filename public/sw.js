console.log("service worker is running in back ground");

self.addEventListener('push',function(e){
    var options = {
        body:'This notification generated from push',
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
    self.registarion.showNotification('Hello Ajay',options
    )
})

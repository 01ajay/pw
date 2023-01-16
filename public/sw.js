console.log("service worker is running in back ground");

self.addEventListener('push',()=>{
    self.registarion.sendNotification('Test Message',{})
})

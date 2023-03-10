console.log("service worker is running in back ground");

//let payload = {title:"Indian Bank",body:"Lowest Interest Ever!!",url:""};

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("push", function (e) {
 
  if (e.data) {
    let data=e.data.text();
    console.log("data",data);
    let payload = JSON.parse(data);
    console.log("payload",payload);
    
    var options = {
      body: `${payload?.["body"]}.`,
      icon: "ib.png",
      vibrate: [100, 50, 100],
      data: {
        url: payload?.["url"],
        dateOfArrival: Date.now(),
        primaryKey: 2,
      },
      actions: [
        {
          action: "go",
          title: "Let's Go",
        },
      ],
    };
    e.waitUntil(
      self.registration.showNotification(payload?.["title"], options)
    );
  } else {
    console.log("push event has no data ");
  }
});

self.addEventListener("notificationclick", (e) => {
  let payload = e.notification.data;
  if (e.action === "go") {
    clients.openWindow(payload?.["url"]);
  }

  e.notification.close();
});

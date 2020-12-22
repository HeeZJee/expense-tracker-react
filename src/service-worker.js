import schedule from "node-schedule";

const registerSW = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js").then(
        function (registration) {
          // Registration was successful
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          // registration failed :(
          console.warn("ServiceWorker registration failed: ", err);
        }
      );
    });
  }
};

Notification.requestPermission().then(function (result) {
  console.log(result);
});

export function displayNotifcation() {
  const title = `Let's Track`;
  const options = {
    body: "Don't Forget track your expense.",
    icon: "./../src/logo192.png",
    vibrate: [100, 50, 100],
    // eslint-disable-next-line no-restricted-globals
    data: { primaryKey: 1, url: location.href },
    actions: [
      { action: "go", title: "Let's go", icon: "✔ " },
      { action: "close", title: "Close", icon: "❌" },
    ],
  };

  if (Notification.permission === "granted") {
    navigator.serviceWorker
      .getRegistration()
      .then((reg) => reg.showNotification(title, options));
  }
}

schedule.scheduleJob({ hour: 20, minute: 0 }, () => {
  displayNotifcation();
});

export default registerSW;

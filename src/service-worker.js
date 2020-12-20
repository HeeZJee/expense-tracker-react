const registerSW = () => {
  if ("serviceWorker" in navigator) {
    console.log("serviceWorker is in navigator");
    navigator.serviceWorker
      .register("/sw.js")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }
};

export default registerSW;

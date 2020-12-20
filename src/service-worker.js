const registerSW = () => {
  if ("serviceWorker" in navigator) {
    console.log("serviceWorker is in navigator");
    navigator.serviceWorker
      .register("/sw.js")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  } else {
    console.log('"serviceWorker is not in navigator"');
  }
};

export default registerSW;

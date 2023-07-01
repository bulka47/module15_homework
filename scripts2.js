function showScreenSize() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    var message = "Размеры экрана: " + width + "px x " + height + "px";
    alert(message);
  }
$(document).ready(function () {
  var img_id = 1;
  setInterval(() => {
    src = "./img/images/" + img_id + ".jpg";
    $("#img").attr("src", src);
    img_id++;
    if (img_id >= 8) {
      img_id = 1;
    }
  }, 500);

  $("#menu").click(function () {
    document.getElementById("top_info").style.top = "0px";
  });
  $(".close-btn").click(function () {
    document.getElementById("top_info").style.top = "-50px";
  });
});

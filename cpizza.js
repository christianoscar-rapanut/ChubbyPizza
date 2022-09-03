$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".navbar").css("background", "#402C23");
  } else {
    $(".navbar").css("background", "transparent");
  }
});

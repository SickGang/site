$(function () {
  $(".company-accordion ul li").click(function () {
    $(this).toggleClass("active");
    $(this).find(".company-accordion_item-text").toggle(400);
  });

  $(
    ".header-nav li a[href^='#'], .dropdown-menu a[href^='#'], .header-img a[href^='#']"
  ).click(function () {
    var fixed_offset = 150;
    $("html,body")
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  });
});

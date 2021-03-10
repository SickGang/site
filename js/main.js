$(function () {
  $(".company-accordion ul li").click(function () {
    $(this).toggleClass("active");
    $(this).find(".company-accordion_item-text").toggle(400);
    // $(this).find("i").css("transform", "rotate(180deg)");
  });
});

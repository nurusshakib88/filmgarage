function main() {
  (function () {
    // Portfolio isotope filter
    $(window).load(function () {
      var $container = $(".portfolio-items");
      $container.isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
      $(".cat a").click(function () {
        $(".cat .active").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    });
  })();
}
main();

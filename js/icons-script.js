function addHoverEffect(selector, hoverImage, defaultImage) {
  $(selector).on({
      mouseenter: function() {
          $(this).attr('src', hoverImage);
      },
      mouseleave: function() {
          $(this).attr('src', defaultImage);
      }
  });
}

$(function() {
  addHoverEffect("#likeIcon", 'images/like-hover.png', 'images/like.png');
  addHoverEffect("#basketIcon", 'images/basket-hover.png', 'images/basket.png');
  addHoverEffect("#like2Icon", 'images/like-2-hover.png', 'images/like-2.png');
});
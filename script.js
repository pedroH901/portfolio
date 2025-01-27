$(document).ready(function () {
    $(".recr-content").click(function () {
      $(".recr-content").removeClass("active");
  
      $(this).addClass("active");
    });
  });

let isDragging = false;
let startX;
let scrollLeft;

$(".conteudo").mousedown(function(e) {
    isDragging = true;
    startX = e.pageX - $(this).offset().left;
    scrollLeft = $(this).scrollLeft();
    $(this).css('cursor', 'grabbing');
});

$(document).mouseup(function() {
    isDragging = false;
    $(".conteudo").css('cursor', 'grab');
});

$(document).mouseleave(function() {
    isDragging = false;
    $(".conteudo").css('cursor', 'grab');
});

$(".conteudo").mousemove(function(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - $(this).offset().left;
    const walk = x - startX;
    $(this).scrollLeft(scrollLeft - walk);
});
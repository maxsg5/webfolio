function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }



  // Carousel settings
var $carousel = $('.js-carousel');

$carousel.flickity({
  prevNextButtons: false,
  pageDots: false
});

// Split each word in the cell title into a span.
var $cellTitle = $('.js-cell-title');

// Wrap every letter in the cell title 
$cellTitle.each(function() {
  var $this = $(this);
  var letters = $this.text().split('');

  $this = $(this);
  $this.empty();

  $.each(letters, function(i, el) {
    $this.append($('<span class="text-split">')
      .append($('<span class="text-split__inner">')
        .text(el)));
  });

  // Dirty way of getting the whitespace
  var emptySplits = $this.find('.text-split__inner:contains( )');
  emptySplits.addClass('whitespace');
  emptySplits.parent().addClass('whitespace');

});
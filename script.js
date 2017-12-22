console.log('Ready!');

$(document).ready(function() {

  const $instructions = $('#instr');
  const $chocolate = $('#choc');
  const $christmas = $('#spiced');
  const $boozy = $('#boozy');
  const $method = $('.instructions');
  const $ingredients = $('.ingredients');


  $instructions.on('click',() => {
    var offset = 20;
    $('html, body').animate({
      scrollTop: $method.offset().top + offset
    }, 2000);
  });

  $chocolate.on('click',() => {
    var offset = 20;
    $('html, body').animate({
      scrollTop: $ingredients.offset().top + offset
    }, 2000);
  });

  $christmas.on('click',() => {
    var offset = 20;
    $('html, body').animate({
      scrollTop: $ingredients.offset().top + offset
    }, 2000);
  });

  $boozy.on('click',() => {
    var offset = 20;
    $('html, body').animate({
      scrollTop: $ingredients.offset().top + offset
    }, 2000);
  });




});
console.log('Ready!');
$(function(){

  const $instructions = $('#instr');
  const $chocolate = $('#choc');
  const $christmas = $('#spiced');
  const $boozy = $('#boozy');
  const $method = $('.instructions');
  const $ingredients = $('.ingredients');


  $instructions.on('click',() => {
    var offset = 20;
    $('html, body').animate({
      scrollTop: $method.offset().top + offset
    }, 2000);
  });

  $chocolate.on('click',() => {
    var offset = 20;
    $('html, body').animate({
      scrollTop: $ingredients.offset().top + offset
    }, 2000);
  });

  $christmas.on('click',() => {
    var offset = 20;
    $('html, body').animate({
      scrollTop: $ingredients.offset().top + offset
    }, 2000);
  });

  $boozy.on('click',() => {
    var offset = 20;
    $('html, body').animate({
      scrollTop: $ingredients.offset().top + offset
    }, 2000);
  });




});

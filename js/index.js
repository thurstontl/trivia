//nav slider
$('ul a').click(function(event){
  
  // prevent defalt click behavior
  // don't jump to content
  event.preventDefault();
    
  // identify position of target
  var target = $(this).attr('href');
  var top = $(target).offset().top;

  // animate scroll to target
  $('html,body').animate({
    scrollTop: top
    },800);
});

//yes and answer button
$('button a').click(function(event){
  
  // prevent defalt click behavior
  // don't jump to content
  event.preventDefault();
    
  // identify position of target
  var target = $(this).attr('href');
  var top = $(target).offset().top;

  // animate scroll to target
  $('html,body').animate({
    scrollTop: top
    },800);
});

//no button
$('button').click(function(){
  if( $(this).hasClass('btn-no') ){
    alert('Wrong answer. Try again.');
  }
});

//question generator
$('.input').change(function(){
  var inputval =  $(this).val();
  var qlist = ["Most murders that ever happend in " + inputval + "?","Number of ice cream cones sold in " + inputval + "?","How many sewer rats are there in " + inputval + "?"][Math.floor(Math.random() * 3)];
  
  if (inputval.length <= 2) {
    alert("There has to be more letters than that.");
  } else {
    $('.question p').html(qlist);
    setTimeout(function(){ 
      alert("Click the card to see the answer."); }, 1700);
  }
  
});

//answer generator
$('.input').change(function(){
  var inputval =  $(this).val();
  var answer = [Math.floor(Math.random() * 1000000)+1];
  
  if (inputval.length <= 2) {
    $('.answer p').html(answer);
  }
  
});

//answer
$('.card').click(function(){
  var answer = [Math.floor(Math.random() * 1000000)+1];

  $('.answer p').html(answer);
})

//flipping card with click
$('.card').click(function(){
  $(this).toggleClass('flip');
});

//reset button
$('button').click(function(){
  if ( $('button').hasClass('reset') ) {
    $('input:input').val('');
  }
});
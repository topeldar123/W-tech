$( document ).ready(function() {
 var j = 0, selectNum, selectedNum, matched = 0, cnt = 0, ingame = false;

 var init = function() {
  $('li').each(function() {
   $(this).css("display", "none;");
   $(this).removeClass('clicked');
   $(this).removeClass('disabled');
  });
  var array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  for (var i=0; i<16; i++) {
   var n = array.splice(Math.floor(Math.random()*array.length), 1);
   var id = "#i"+(Math.floor(i/4)+1)+(i%4+1);
   $(id).text(''+n); 
   $(id).addClass('disabled').removeClass('clicked');
  }
  cnt = j = matched = 0;
  $('#upmsg').text('Открой одинаковые карточки за минимальное количество ходов'); 
  ingame = true;
 };

 $('#upmsg').click(function() {
  init();
 });

 $('li').click(function() {
  $(this).addClass('clicked');
  if (!ingame) return;
  cnt++;
  $('#downmsg').text('Кликов: '+cnt);
  j++;
  if (j == 1) {
   selectNum = $(this).text();
  }
  if (j == 2) {
   selectedNum = $(this).text();
   checkCondition();
  }
  if (matched > 15) {
   $('#downmsg').text('Вы выиграли, количество кликов = '+cnt); 
   ingame = false;
  }
 });

 var checkCondition = function() {
  if (selectNum === selectedNum) {
   $('li').each(function() {
    if ($(this).hasClass('clicked')) {
     $(this).addClass('disabled').removeClass('clicked');
     matched++;
    }
    j = 0;
   });
  } 
  else {
   $('li').removeClass('clicked');
   j = 0;
  }
 };

});
var socket = io();

$('form').submit(function(){
  var time = new Date();
  socket.emit('chat message', time + "  " + $('#m').val());
  $('#m').val('');
  return false;
});


socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});

var gui = require('nw.gui');
var win = gui.Window.get();

onload = function() {
  win.show();
  win.maximize();

  $(".button-collapse").sideNav();
  $('.exitApp').click(function() { win.close(); });
}
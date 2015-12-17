alert("abc-123")

var img = new Image();
var div = document.getElementById('foo');

img.onload = function() {
  div.appendChild(img);
};

img.src = 'http://static.bbci.co.uk/frameworks/barlesque/3.7.3/orb/4/img/bbc-blocks-dark.png';

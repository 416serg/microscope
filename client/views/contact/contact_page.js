Template.contact.rendered = function () {
	setTimeout(function() { 
    twttr.widgets.load(this.firstNode);;
    FB.XFBML.parse(this.firstNode);
  }, 0);
  ! function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = "//platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }(document, "script", "twitter-wjs");
}
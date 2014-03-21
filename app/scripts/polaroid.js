var $el = $('#grid');
//var listView = new infinity.ListView($el
//  // , {lazy: function(jqueryContext) { console.log(jqueryContext); } }
//);

// ... When adding new content:

var grid = "<div class='col-xs-6 col-md-3'>%CONTENT%</div>";
var picture = '<div class="thumbnail"><a href="%link-img%"><img src="%image%" alt="img"class="img-responsive"></a>'
  + '<div class="caption">'
  + '<h4><a href="%link-title%">%title%</a></h4>'
  + '<p>%text% <a href="%link-more%">&gt; Plus</a></p>'
  + '</div></div>';

var cnt;
for (cnt = 0; cnt < 32; cnt++) {
  var current = picture;
  current = current.replace("%link-img%", Polaroids[cnt].link);
  current = current.replace("%link-title%", Polaroids[cnt].link);
  current = current.replace("%link-more%", Polaroids[cnt].link);
  current = current.replace("%image%", Polaroids[cnt].image);
  current = current.replace("%title%", Polaroids[cnt].title);
  current = current.replace("%text%", Polaroids[cnt].text);
  var res = grid.replace("%CONTENT%", current);
//    listView.append($(res));
  $el.append(res);
}

//var more = '<div class="col-md-12"><a href="#more">More</a></div>';


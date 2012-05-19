$(document).ready(function() {
  $('.demo').each(function() {
  	var ele = $(this);
  	var srcid = ele.attr('data-src');
  	var srcele = $('#' + srcid);
  	ele.text(srcele.html());
  });
});



var countries = ['Austria', 'USA', 'Australia', 'South Korea', 'Central African Republic'];
var scores2017 = [7.006, 6.993, 7.284, 5.838, 2.693];
var scores2018 =[7.139, 6.886, 7.272, 5.875, 3.083];

for(var i=0; i < scores2018.length; i++) {
  $('#scores2018').append("<li>" + countries[i] + ": " + scores2018[i] + "</li>");
  var value= 411*scores2018[i]/10;
  $('#chart2018 > g.bar'+(i + 1) + ' > rect').attr('height', value);
  $('#chart2018 > g.bar'+(i + 1) + ' > rect').attr('y', 370-value);
}

$('#button2017').click(function(){
  $('#chart2018').hide();
  $('#chart2017').show();
});

$('#button2018').click(function(){
  $('#chart2017').hide();
  $('#chart2018').show();
})

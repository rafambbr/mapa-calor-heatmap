window.onload = function() {
  
  var heatmap = h337.create({
    container: document.getElementById('heatmapContainer'),
    maxOpacity: .2,
    radius: 40,
    blur: .75,
    backgroundColor: 'white'  //'rgba(0, 0, 58, 0.96)'
  });
  var heatmapContainer = document.getElementById('heatmapContainerWrapper');


  heatmapContainer.onmousemove = heatmapContainer.ontouchmove = function(e) {
    e.preventDefault();
    var x = e.layerX;
    var y = e.layerY;
    if (e.touches) {
      x = e.touches[0].pageX;
      y = e.touches[0].pageY;
    }
    
    heatmap.addData({ x: x, y: y, value: 0.1 });

  };

  heatmapContainer.onclick = function(e) {
    var x = e.layerX;
    var y = e.layerY;
    heatmap.addData({ x: x, y: y, value: 1 });
  };

};
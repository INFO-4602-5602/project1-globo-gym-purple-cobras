mapboxgl.accessToken = 'pk.eyJ1IjoiamVubmluZ3NhbmRlcnNvbiIsImEiOiIzMHZndnpvIn0.PS-j7fRK3HGU7IE8rbLT9A';
var map = new mapboxgl.Map({
    container: 'map',
    zoom: 3,
    hash:true,
    minZoom:2.87,
    maxZoom:15.5,
    // bounds:
    center: [-96.78, 37.43],
    style:'mapbox://styles/mapbox/light-v9'
  });

// map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

var activeMapLayers = [
  'off-network','on-network'
]

var circleRadius = {
  'property': 'accounts',
  'stops'   : [[1,5],[20,8],[100,12]]
}

function loadMap(){
  map.once('load',function(){

    map.addSource('onNetwork', {
      type: 'geojson',
      data: pageData.onNetworkBuildings
    })
    map.addSource('offNetwork', {
      type: 'geojson',
      data: pageData.offNetworkBuildings
    })

    map.addLayer({
      id: 'off-network',
      type: 'circle',
      source: 'offNetwork',
      paint: {
          'circle-color': '#005d77',
          'circle-opacity': 0.5,
          'circle-radius' : circleRadius
      },
      layout: {'visibility':'visible'}
    })

    map.addLayer({
      id: 'on-network',
      type: 'circle',
      source: 'onNetwork',
      paint: {
          'circle-color': '#f58233',
          'circle-opacity': 0.5,
          'circle-radius': circleRadius
      },
      layout: {'visibility':'visible'}
    })

    var popup = new mapboxgl.Popup({clickToClose: true})

    map.on('mousemove', function (e) {
      if (map.getZoom()>10){
        map.getCanvas().style.cursor = 'pointer'
        var features = map.queryRenderedFeatures(e.point,{layers: activeMapLayers});

        if(!features.length){popup.remove(); return}

        popup.setLngLat(e.lngLat)
          .setHTML(buildPrettyTable(features[0].properties))
          .addTo(map);

      }else{
        map.getCanvas().style.cursor = ''
      }
    });
    //Once map is loaded, call pageLoaded()
    pageData.mapLoaded = true;
  });
};

var products = [ 'Dark Fiber - Metro',  'Ethernet',  'IP Services',  'SONET',  'FTT - Dark Fiber',  'ISP',  'Managed WAN-LAN',  'FTT - Ethernet',  'Dark Fiber - Long Haul',  'FTT - Small Cell',  'Wavelengths - Long Haul',  'Wavelengths - Metro',  'zColo']

function buildPrettyTable(properties){

  console.log(JSON.stringify(properties.b_rev))

  var html = `<table class="txt--m">
  <tr><td>Sites</td><td pl6><span class="txt-mono">${properties.sites}</span></td></tr>
  <tr><td>Accounts</td><td pl6><span class="txt-mono">${properties.accounts}</span></td></tr>
  <tr><td>Building Cost</td><td pl6><span class="txt-mono">$${properties.cost.toLocaleString()}</span></td></tr>
  <tr><td>Building Revenue</td><td pl6><span class="txt-mono">$${properties.b_rev.toLocaleString()}</span></td></tr></table>`

  html += `<h5 class="txt-m">Available Proucts:</h5><table>`
  html += `<tr><th>Product</th><th>Count</th></tr>`
  products.forEach(function(product){
    if (properties[product]>0){
      html += `<tr><td>${product}</td><td>${properties[product]}</td></tr>`
    }
  })

  return html + "</table></div>"
}

// const stores=require('./store')
import {stores} from './store'

mapboxgl.accessToken = 'pk.eyJ1Ijoib210aGFrdXIxMjI0IiwiYSI6ImNsNXc3azh2MDBiMXozaW56dzZub3Y5MnUifQ.12VimV4yzVRdBB0K3S919g';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-77.04, 38.907],
    zoom: 12
});


// Add the control to the map. (geocoder that is search input)

map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
    );
    
let nav=new mapboxgl.NavigationControl();
    map.addControl(nav)

    const layerList = document.getElementById('menu');
    const inputs = layerList.getElementsByTagName('input');
    
    for (const input of inputs) {
    input.onclick = (layer) => {
    const layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
    };
}

map.on('load', () => {
    map.addSource('places', {
    // This GeoJSON contains features that include an "icon"
    // property. The value of the "icon" property corresponds
    // to an image in the Mapbox Streets style's sprite.
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
    'icon': 'theatre-15'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-77.038659, 38.931567]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
    'icon': 'theatre-15'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-77.003168, 38.894651]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',
    'icon': 'bar-15'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-77.090372, 38.881189]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Ballston Arts & Crafts Market</strong><p>The <a href="http://ballstonarts-craftsmarket.blogspot.com/" target="_blank" title="Opens in a new window">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>',
    'icon': 'art-gallery-15'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-77.111561, 38.882342]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year\'s <a href="http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/" target="_blank" title="Opens in a new window">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>',
    'icon': 'bicycle-15'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-77.052477, 38.943951]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Capital Pride Parade</strong><p>The annual <a href="http://www.capitalpride.org/parade" target="_blank" title="Opens in a new window">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>',
    'icon': 'rocket-15'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-77.043444, 38.909664]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">Muhsinah</a> plays the <a href="http://www.blackcatdc.com">Black Cat</a> (1811 14th Street NW) tonight with <a href="http://www.exitclov.com" target="_blank" title="Opens in a new window">Exit Clov</a> and <a href="http://godsilla.bandcamp.com" target="_blank" title="Opens in a new window">Gods’illa</a>. 9:00 p.m. $12.</p>',
    'icon': 'music-15'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-77.031706, 38.914581]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>A Little Night Music</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
    'icon': 'music-15'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-77.020945, 38.878241]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'description':
    '<strong>Truckeroo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
    'icon': 'music-15'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-77.007481, 38.876516]
    }
    }
    ]
    }
    });
    // Add a layer showing the places.
    map.addLayer({
    'id': 'places',
    'type': 'symbol',
    'source': 'places',
    'layout': {
    'icon-image': '{icon}',
    'icon-allow-overlap': true
    }
    });
     
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;
     
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
     
    new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);
    });
     
    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', () => {
    map.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', () => {
    map.getCanvas().style.cursor = '';
    });
    });

    /* Assign a unique ID to each store */
stores.features.forEach(function (store, i) {
    store.properties.id = i;
  });

  // //building store
  // function buildLocationList(stores) {
  //     for (const store of stores.features) {
  //       /* Add a new listing section to the sidebar. */
  //       const listings = document.getElementById('listings');
  //       const listing = listings.appendChild(document.createElement('div'));
  //       /* Assign a unique `id` to the listing. */
  //       listing.id = `listing-${store.properties.id}`;
  //       /* Assign the `item` class to each listing for styling. */
  //       listing.className = 'item';
    
  //       /* Add the link to the individual listing created above. */
  //       const link = listing.appendChild(document.createElement('a'));
  //       link.href = '#';
  //       link.className = 'title';
  //       link.id = `link-${store.properties.id}`;
  //       link.innerHTML = `${store.properties.address}`;
    
  //       /* Add details to the individual listing. */
  //       const details = listing.appendChild(document.createElement('div'));
  //       details.innerHTML = `${store.properties.city}`;
  //       if (store.properties.phone) {
  //         details.innerHTML += ` · ${store.properties.phoneFormatted}`;
  //       }
  //       if (store.properties.distance) {
  //         const roundedDistance = Math.round(store.properties.distance * 100) / 100;
  //         details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
  //       }
  //     }
  //   }

  map.on('load', () => {
    /* Add the data to your map as a layer */
    map.addLayer({
      id: 'locations',
      type: 'circle',
      /* Add a GeoJSON source containing place coordinates and information. */
      source: {
        type: 'geojson',
        data: stores
      }
    });
    buildLocationList(stores);
  });


 
/**
* Assign a unique id to each store. You'll use this `id`
* later to associate each point on the map with a listing
* in the sidebar.
*/
stores.features.forEach((store, i) => {
  store.properties.id = i;
  });
   
  /**
  * Wait until the map loads to make changes to the map.
  // */
  map.on('load', () => {
  /**
  * This is where your '.addLayer()' used to be, instead
  * add only the source without styling a layer
  */
  map.addSource('places', {
  'type': 'geojson',
  'data': stores
  });
   
  /**
  * Add all the things to the page:
  * - The location listings on the side of the page
  * - The markers onto the map
  */
  buildLocationList(stores);
  addMarkers();
  });
   
  /**
  * Add a marker to the map for every store listing.
  **/
  function addMarkers() {
  /* For each feature in the GeoJSON object above: */
  for (const marker of stores.features) {
  /* Create a div element for the marker. */
  const el = document.createElement('div');
  /* Assign a unique `id` to the marker. */
  el.id = `marker-${marker.properties.id}`;
  /* Assign the `marker` class to each marker for styling. */
  el.className = 'marker';
   
  /**
  * Create a marker using the div element
  * defined above and add it to the map.
  **/
  new mapboxgl.Marker(el, { offset: [0, -23] })
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
   
  /**
  * Listen to the element and when it is clicked, do three things:
  * 1. Fly to the point
  * 2. Close all other popups and display popup for clicked store
  * 3. Highlight listing in sidebar (and remove highlight for all other listings)
  **/
  el.addEventListener('click', (e) => {
  /* Fly to the point */
  flyToStore(marker);
  /* Close all other popups and display popup for clicked store */
  createPopUp(marker);
  /* Highlight listing in sidebar */
  const activeItem = document.getElementsByClassName('active');
  e.stopPropagation();
  if (activeItem[0]) {
  activeItem[0].classList.remove('active');
  }
  const listing = document.getElementById(
  `listing-${marker.properties.id}`
  );
  listing.classList.add('active');
  });
  }
  }
   
  /**
  * Add a listing for each store to the sidebar.
  **/
  function buildLocationList(stores) {
  for (const store of stores.features) {
  /* Add a new listing section to the sidebar. */
  const listings = document.getElementById('listings');
  const listing = listings.appendChild(document.createElement('div'));
  /* Assign a unique `id` to the listing. */
  listing.id = `listing-${store.properties.id}`;
  /* Assign the `item` class to each listing for styling. */
  listing.className = 'item';
   
  /* Add the link to the individual listing created above. */
  const link = listing.appendChild(document.createElement('a'));
  link.href = '#';
  link.className = 'title';
  link.id = `link-${store.properties.id}`;
  link.innerHTML = `${store.properties.address}`;
   
  /* Add details to the individual listing. */
  const details = listing.appendChild(document.createElement('div'));
  details.innerHTML = `${store.properties.city}`;
  if (store.properties.phone) {
  details.innerHTML += ` &middot; ${store.properties.phoneFormatted}`;
  }
   
  // /**
  // * Listen to the element and when it is clicked, do four things:
  // * 1. Update the `currentFeature` to the store associated with the clicked link
  // * 2. Fly to the point
  // * 3. Close all other popups and display popup for clicked store
  // * 4. Highlight listing in sidebar (and remove highlight for all other listings)
  // **/
  link.addEventListener('click', function () {
  for (const feature of stores.features) {
  if (this.id === `link-${feature.properties.id}`) {
  flyToStore(feature);
  createPopUp(feature);
  }
  }
  const activeItem = document.getElementsByClassName('active');
  if (activeItem[0]) {
  activeItem[0].classList.remove('active');
  }
  this.parentNode.classList.add('active');
  });
  }
  }
   
  /**
  * Use Mapbox GL JS's `flyTo` to move the camera smoothly
  * a given center point.
  **/
  function flyToStore(currentFeature) {
  map.flyTo({
  center: currentFeature.geometry.coordinates,
  zoom: 15
  });
  }
   
  /**
  * Create a Mapbox GL JS `Popup`.
  **/
  function createPopUp(currentFeature) {
  const popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  const popup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat(currentFeature.geometry.coordinates)
  .setHTML(
  `<h3>Sweetgreen</h3><h4>${currentFeature.properties.address}</h4>`
  )
  .addTo(map);
  }




// navigator.geolocation.getCurrentPosition(successLocation,errorLocation,
//     {enableHighAccuracy:true})

//     function successLocation(position){
//         console.log(position)
//         setMap([position.coords.longitude, position.coords.latitude])
//     }

//     function errorLocation(){
//         //when location is not available it will take to menchester location
//         setMap([-2.24, 53.48])
//     }

//     function setMap(center){
    
//     var map = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center:center,
//       zoom:12
//     });
// map.addControl(new mapboxgl.NavigationControl());






// }
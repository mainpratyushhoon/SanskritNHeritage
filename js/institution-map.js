(function() {
  'use strict';

  function initialize(containerId, locations) {
    const container = document.getElementById(containerId);
    if (!container || typeof L === 'undefined') {
      return;
    }

    const map = L.map(containerId, {
      scrollWheelZoom: false,
      minZoom: 2
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const markers = [];
    locations.forEach(item => {
      if (!item.lat || !item.lng) {
        return;
      }

      const popupContent = `
        <div style="font-family: var(--font-body); line-height:1.5;">
          <strong>${item.label}</strong><br/>
          ${item.subtitle ? item.subtitle + '<br/>' : ''}
          ${item.link ? `<a href="${item.link}" target="_blank" rel="noreferrer">Visit website</a>` : ''}
        </div>
      `;

      const marker = L.marker([item.lat, item.lng]).addTo(map);
      marker.bindPopup(popupContent);
      markers.push([item.lat, item.lng]);
    });

    if (markers.length) {
      map.fitBounds(markers, { padding: [40, 40] });
    } else {
      map.setView([20, 78], 4);
    }

    return map;
  }

  window.InstitutionMap = {
    initialize
  };
})();

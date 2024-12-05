import { Controller } from "@hotwired/stimulus"
import * as L from "leaflet"

export default class extends Controller {
  static targets = ["map", "geojson"]
  connect() {
    //console.log("Map connected")

    let map = L.map(this.mapTarget).setView([0, 0], 2);

    let osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let geojsonData = this.geojsonTarget.value;

    let geojson;
    try {
      geojson = JSON.parse(geojsonData);
    } catch (error) {
      console.error("Erro ao analisar o JSON:", error);
      return;
    }

    function onEachFeature(feature, layer) {
      if (feature.properties) {
        let popupContent =
          "<p><strong>Propriedade:</strong> " + feature.properties.name + "</p>" +
          "<p><strong>Código Incra:</strong> " + feature.properties.ccir + "</p>" +
          "<p><strong>Registro:</strong> " + feature.properties.register + "</p>";
        layer.bindPopup(popupContent);
      }
    }

    let geojsonLayer = L.geoJSON(geojson, {
      onEachFeature: onEachFeature
    }).addTo(map);

    // Ajusta o mapa para caber todos os shapes
    if (geojsonLayer.getBounds().isValid()) {
      map.fitBounds(geojsonLayer.getBounds());
    }
  }
}

import { Controller } from "@hotwired/stimulus"
//import * as L from "leaflet"
import 'esri-leaflet';
import 'esri-leaflet-vector';

export default class extends Controller {
  static targets = ["map", "geojson"]
  connect() {
    // acesso a imagem bing
    const accessToken = "token"; // Substitua pelo seu token de acesso

    const basemapEnum = "arcgis/imagery"; // Substitua pelo estilo de mapa desejado

    let map = L.map(this.mapTarget, {
      minZoom: 2
    }).setView([34.02, -118.805], 13);

    /* L.esri.Vector.vectorBasemapLayer(basemapEnum, {
      token: accessToken,
      version: 2
    }).addTo(map); */

    var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //inserir shapefile
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

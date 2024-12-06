import { Controller } from "@hotwired/stimulus"
import 'esri-leaflet';
import 'esri-leaflet-vector';

export default class extends Controller {
  static targets = ["map", "geojson"]
  connect() {
    // acesso a imagem bing
    const accessToken = "AAPTxy8BH1VEsoebNVZXo8HurOz2ILV9IPXaEiSb0kQglNnfngCE-t23J0gdUQEZyAm95qD9AieY0HRNfaKeLkAj3LoBhEmIj9HlTjgvQuyOAiUYHDlIGd-cHp_Zf1k8Kq1Q7UKFNdSkGeAh_KCdRDte3Kw-6KO6pFdJgw2iKs7k7QoVDM0J8EqmS15EtY3NnKY7p-LbeLv98Vta1cKE8Vtkmt9Xhs8c6V8RYgi443916ss.AT1_2b39mK4T"; // Substitua pelo seu token de acesso

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

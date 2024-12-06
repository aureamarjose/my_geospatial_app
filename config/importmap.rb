# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "leaflet" # @1.9.4
pin "leaflet-css" # @0.1.0
# pin "esri-leaflet", to: "https://unpkg.com/esri-leaflet@3.0.13/dist/esri-leaflet.js"
# pin "esri-leaflet-vector", to: "https://unpkg.com/esri-leaflet-vector@4.2.5/dist/esri-leaflet-vector.js"

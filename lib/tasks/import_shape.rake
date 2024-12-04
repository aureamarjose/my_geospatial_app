# lib/tasks/import_shapefile.rake
namespace :import do
  desc "Import shapefile data into the database"
  task shapefile: :environment do
    require "rgeo/shapefile"

    RGeo::Shapefile::Reader.open("/home/aureamar/Documentos/Projeto_GIS/shapefile/sigef.shp") do |file|
      file.each do |record|
        Shape.create(
          property_name: record["nome_area"],
          property_ccir: record["codigo_imo"],
          property_register: record["registro_m"],
          property_area: record["area_ha"],
          geom: record.geometry)
      end
    end
  end
end

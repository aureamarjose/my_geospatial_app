class ShapesController < ApplicationController
  def index
    @shapes = Shape.all
    features = @shapes.map do |shape|
      RGeo::GeoJSON::Feature.new(shape.geom, shape.id, {
        name: shape.property_name,
        ccir: shape.property_ccir,
        register: shape.property_register,
        area: shape.property_area })
    end
    @geojson = RGeo::GeoJSON.encode(RGeo::GeoJSON::FeatureCollection.new(features))
    puts "Shapes: #{@shapes.inspect}"
  end

  def show
    @shape = Shape.find(params[:id])
  end
end

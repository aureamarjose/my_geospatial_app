class CreateShapes < ActiveRecord::Migration[7.2]
  def change
    create_table :shapes do |t|
      t.string :name
      # t.geometry :geom
      t.geometry :geom, has_z: true, has_m: true, srid: 4326 # Alterado para suportar geometrias 3D

      t.timestamps
    end
  end
end

class CreateAirports < ActiveRecord::Migration[6.1]
  def change
    create_table :airports do |t|
      t.belongs_to :city, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end

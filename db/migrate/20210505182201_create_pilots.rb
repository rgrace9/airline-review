class CreatePilots < ActiveRecord::Migration[6.1]
  def change
    create_table :pilots do |t|
      t.string :first_name
      t.string :last_name
      t.belongs_to :airline, null: false, foreign_key: true

      t.timestamps
    end
  end
end

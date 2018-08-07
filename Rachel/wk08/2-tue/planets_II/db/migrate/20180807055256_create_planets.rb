class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.string :name
      t.text :url

      t.timestamps
    end
  end
end

class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :project_owner_id, null: false

      t.timestamps
    end
  end
end

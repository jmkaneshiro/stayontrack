class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :name, null:false
      t.integer :type, null:false
      t.integer :story_owner_id, null:false
      t.integer :project_id, null:false
      t.string :story_state, null:false
      t.integer :story_assignee_id
      t.string :description

      t.timestamps
    end
  end
end

class CreateUserProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :project_memberships do |t|
      t.integer :member_id, null: false
      t.integer :project_id, null: false

      t.timestamps
    end
  end
end

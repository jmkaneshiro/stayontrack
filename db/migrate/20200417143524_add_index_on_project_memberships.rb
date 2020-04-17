class AddIndexOnProjectMemberships < ActiveRecord::Migration[5.2]
  def change
    add_index :project_memberships, [:member_id, :project_id]
  end
end

class FixStoriesColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :stories, :type, :story_type
  end
end

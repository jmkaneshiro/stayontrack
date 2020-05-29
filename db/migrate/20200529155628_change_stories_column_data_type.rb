class ChangeStoriesColumnDataType < ActiveRecord::Migration[5.2]
  def change
    change_column :stories, :story_type, :string
  end
end

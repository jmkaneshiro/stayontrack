class AddUsernameInitialsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, null: false
    add_column :users, :name, :string, null: false
    add_column :users, :initials, :string, null: false

    add_index :users, :username, { unique: true }
  end
end

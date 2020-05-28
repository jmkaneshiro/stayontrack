# == Schema Information
#
# Table name: stories
#
#  id                :bigint           not null, primary key
#  name              :string           not null
#  type              :integer          not null
#  story_owner_id    :integer          not null
#  project_id        :integer          not null
#  story_state       :string           not null
#  story_assignee_id :integer
#  description       :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Story < ApplicationRecord
  validates :name, :type, :story_owner_id, :story_state, presence: true

  belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project

  belongs_to :story_owner,
    foreign_key: :story_owner_id,
    class_name: :User

  belongs_to :story_assignee,
    foreign_key: :story_assignee_id,
    class_name: :User
end

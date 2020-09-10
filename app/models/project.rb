# == Schema Information
#
# Table name: projects
#
#  id               :bigint           not null, primary key
#  title            :string           not null
#  project_owner_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Project < ApplicationRecord
  validates :title, presence: true

  belongs_to :project_owner,
    foreign_key: :project_owner_id,
    class_name: :User

  has_many :project_memberships, dependent: :destroy,
    foreign_key: :project_id,
    class_name: :ProjectMembership

  has_many :members,
    through: :project_memberships,
    source: :member

  has_many :stories, dependent: :destroy,
    foreign_key: :project_id,
    class_name: :Story
end

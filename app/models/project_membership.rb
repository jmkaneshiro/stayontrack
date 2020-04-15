# == Schema Information
#
# Table name: project_memberships
#
#  id               :bigint           not null, primary key
#  member_id        :integer          not null
#  project_id       :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null

class ProjectMembership < ApplicationRecord
  belongs_to :member,
    foreign_key: :member_id,
    class_name: :User

  belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project
end
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
require 'test_helper'

class StoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

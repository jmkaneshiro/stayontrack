class Api::ProjectMembershipsController < ApplicationController
  def create
    @project_membership = ProjectMembership.new(project_membership_params)

    if @project_membership.save
      render "/api/projects/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def project_membership_params
    params.require(:project_membership).permit(:project_id, :member_id)
  end
end
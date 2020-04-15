class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(title: params[:title], project_owner_id: current_user.id)
    if @project.save
      render "/api/projects/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  private
  def project_params
    params.require(:project).permit(:title)
  end
end
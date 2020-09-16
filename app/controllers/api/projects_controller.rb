class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render :index
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render "/api/projects/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find(params[:id])
    render "/api/projects/show"
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render json: @project
  end

  private
  def project_params
    params.require(:project).permit(:title, :project_owner_id)
  end
end
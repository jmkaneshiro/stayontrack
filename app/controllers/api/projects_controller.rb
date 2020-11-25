class Api::ProjectsController < ApplicationController
  def index
    @projects = current_user.projects
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
    
    if @project && @project.members.include?(current_user)
      render "/api/projects/show"
    elsif @project && !@project.members.include?(current_user)
      render json: ["You are not authorized to view this resource. Please contact the owner of this resource to request authorization."], status: 403
    else
      render json: ["Project not found"], status: 404
    end
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
class Api::StoriesController < ApplicationController
  def index
    @project = Project.find(params[:project_id])
    @stories = @project.stories
    render json: @stories
  end

  def create
    debugger
    @story = Story.new(story_params)
    debugger
    if @story.save
      render "/api/stories/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @story = Story.find(params[:id])
  end

  private
  def story_params
    params.require(:story).permit(
      :name, 
      :story_type, 
      :story_owner_id, 
      :project_id, 
      :story_state,
      # :story_assignee_id,
      :description)
  end
end
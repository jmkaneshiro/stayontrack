class Api::StoriesController < ApplicationController
  def index
    @project = Project.find(params[:project_id])
    @stories = @project.stories
    render json: @stories
  end

  def create
    @story = Story.new(story_params)
    if @story.save
      render "/api/stories/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @story = Story.find(params[:id])
  end

  def update
    @story = Story.find(params[:id])
    @story.update(story_params)
    render "/api/stories/show"
  end

  def destroy
    @story = Story.find(params[:id])
    @story.destroy
    render json: @story
  end

  private
  def story_params
    params.require(:story).permit(
      :name, 
      :story_type, 
      :story_owner_id, 
      :project_id, 
      :story_state,
      :story_assignee_id,
      :description)
  end
end
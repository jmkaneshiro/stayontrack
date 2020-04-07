class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      email: params[:user][:email], 
      password: params[:user][:password])

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid email\/password combination."], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout!
    else
      render json: ["No one is signed in"], status: 404
    end
  end
end
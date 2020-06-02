class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end
  
  def create
    @user = User.new(params_with_username_initials)
    if @user.save
      login!(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def params_with_username_initials
    email = params[:user][:email]
    password = params[:user][:password]
    username = email.split("@").first
    name = username.clone
    initials = username.first(2).upcase

    until !User.find_by(username: username)
      count = 1
      username = username + count.to_s
      count += 1
    end

    params_with_username_initials = { email: email, password: password, username: username, name: name, initials: initials }
  end
end
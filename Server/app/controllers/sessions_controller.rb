class SessionsController < ApplicationController

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      self.current_user = user
      render(
          json: SessionSerializer.new(user, root: false).to_json,
          status: 201
      )
    else
      render(
          status: 401
      )
    end
  end

  private
  def create_params
    params.require(:user).permit(:email, :password)
  end

end
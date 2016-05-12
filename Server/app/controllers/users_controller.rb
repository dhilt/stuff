class UsersController < ApplicationController

  def show
    user = User.find(params[:id])
    render(json: UserSerializer.new(user).to_json)
  end

end
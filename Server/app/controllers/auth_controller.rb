class AuthController < ApplicationController

  # POST /login
  def login
      if !params[:login].blank? and !params[:password].blank?
        @user = User.find_by(name: params[:login])
        if @user and @user.password == params[:password]
          token = Digest::SHA1.hexdigest([Time.now, rand].join)
          @user.update(token: token)
          render json: { ok: true, token: token }, status: :ok
          return
        end
      end
      render plain: 'Bad credentials', status: :bad_request
  end

  # Get /logout
  def logout
    token = get_bearer_token
    unless token.blank?
      @user = User.find_by(token: token)
      if @user
        @user.update(token: nil)
        render json: { ok: true }, status: :ok
      else
        render plain: 'User not found', status: :bad_request
      end
    else
      render plain: 'No authorization token', status: :bad_request
    end
  end

end
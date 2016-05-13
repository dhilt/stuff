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
      render json: { error: 'Bad credentials' }, status: :unauthorized
  end

end
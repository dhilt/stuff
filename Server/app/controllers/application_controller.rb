class ApplicationController < ActionController::Base

  protect_from_forgery with: :null_session

  protected
  def authenticate
    if cookies[:auth].blank?
      render json: { error: 'Bad credentials' }, status: 302
    else
      User.find_by(auth_token: token)
    end
  end

  def authenticate_user!
    token, options = ActionController::HttpAuthentication::Token.token_and_options(request)

    user_email = options.blank?? nil : options[:email]
    user = user_email && User.find_by(email: user_email)

    if user && ActiveSupport::SecurityUtils.secure_compare(user.authentication_token, token)
      @current_user = user
    else
      render json: { error: 'Bad credentials' }, status: 401
    end
  end

end

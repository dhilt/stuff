class ApplicationController < ActionController::Base

  protected
  def authenticate
    #logger.info("-----------======================------------")
    #logger.info("bearer_token: #{bearer_token}")
    #logger.info("-----------======================------------")
    unless get_bearer_token.blank?
      if User.find_by(token: get_bearer_token)
        return true
      end
    end
    render plain: 'Authorization is needed.', status: 302
  end

  def get_bearer_token
    pattern = /^Bearer /
    header = request.env["HTTP_AUTHORIZATION"] # <= env
    header.gsub(pattern, '') if header && header.match(pattern)
  end
end

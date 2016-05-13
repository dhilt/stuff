class SessionSerializer < BaseSerializer
  #just some basic attributes
  attributes :id, :email, :name, :admin, :token

  def token
    object.authentication_token
  end
end
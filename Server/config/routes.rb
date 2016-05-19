Rails.application.routes.draw do

  scope :api do 
    resources :items
    resources :tags
    post 'index' => 'index#items'
    post 'login' => 'auth#login'
    get 'logout' => 'auth#logout'
  end

  get '*path' => redirect('/')

end
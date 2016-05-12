Rails.application.routes.draw do
  
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  scope :api do 
    resources :items
    resources :tags
    resources :users, only: [:index, :create, :show, :update, :destroy]
    post 'index' => 'index#items'
    post 'login' => 'auth#login'
  end
end

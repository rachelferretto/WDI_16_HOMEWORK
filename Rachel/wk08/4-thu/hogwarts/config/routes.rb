Hogwarts::Application.routes.draw do

  root "houses#index"
  #get '', to: "students#show"
  resources :houses, only: [:index, :show]
  resources :students, only: [:index, :show]

end

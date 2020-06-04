Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create]
    resources :projects, only: [:index, :create, :show] do
      resources :stories, only: [:index, :create, :show, :update, :destroy]
    end
    resources :project_memberships, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
  root to: "static_pages#root"
end

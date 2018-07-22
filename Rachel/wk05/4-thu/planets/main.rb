     
require 'sinatra'
require "sinatra/reloader"
require 'pg'
require 'pry'
require_relative 'db_config'
require_relative 'models/planet'
require_relative 'models/detail'
require_relative 'models/comment'
require_relative 'models/user'


enable :sessions

helpers do  #creates methods that views can use
  def current_user 
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

end

get '/' do
  @planets = Planet.all
  erb :index
end

get '/about' do
  erb :about
end

get '/planets/new' do
  erb :new
end


get '/planets/:id' do
  @planet = Planet.find(params[:id])
  @comments = @planet.comments
  @details = @planet.details

  erb :planet
end

post '/planets' do
  planet = Planet.new
  planet.name = params[:name]
  planet.img_url = params[:img_url]
  planet.save
  redirect '/'
end

delete '/planets/:id' do
  planet = Planet.find(params[:id])
  planet.destroy
  redirect '/'
end

#edit planet name/url
get '/planets/:id/edit' do
  @planet = Planet.find(params[:id])
   erb :edit
  end

put '/planets/:id' do
  planet = Planet.find(params[:id])
  planet.name = params[:name]
  planet.img_url = params[:img_url]
  planet.save

  redirect "/planets/#{params[:id]}"
end

post '/comments' do
  comment = Comment.new
  comment.content = params[:content]
  comment.comment_time = Time.now.strftime("%H:%M %-d %b %y")
  comment.planet_id = params[:planet_id]
  comment.save
  redirect "/planets/#{params[:planet_id] }"
end

delete '/comment/:id' do
  comment = Comment.find( params[:id] )
  comment.destroy

  redirect "/planets/#{ params[:id] }"
end

#login

get '/login' do 
  erb :login
end

post '/session' do
    #grab email/password from the form at '/login'
  #find the user by email
  user = User.find_by(email: params[:email])
  #authenticate user with password
  if user && user.authenticate(params[:password])
    #create new session
    session[:user_id] = user.id
     #redirect to secret page
    redirect '/'
  else 
    erb :login
  end
end

delete '/session' do
  #delete the session
  session[:user_id] = nil
  #redirect to login page
  redirect '/login'
end













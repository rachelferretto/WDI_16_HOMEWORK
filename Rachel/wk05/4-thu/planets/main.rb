     
require 'sinatra'
require "sinatra/reloader"
require 'pg'
require 'pry'
require_relative 'db_config'
require_relative 'models/planet'


get '/' do
  @planets = Planet.all
  erb :index
end


get '/planets/new' do
  erb :new
end


get '/planets/:id' do
  @planet = Planet.find(params[:id])
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
  @planet = Planet.find(params[:id])
  @planet.destroy
  redirect '/'
end













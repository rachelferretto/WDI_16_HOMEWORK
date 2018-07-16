#https://gist.github.com/epoch/6a7ac3bce7684984d527#file-movies-md

require 'pry'    
require 'sinatra'
require "sinatra/reloader"
require 'httparty'

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/movies' do
  title = params["t"]
  @result = HTTParty.get("http://omdbapi.com/?t=#{title}&apikey=2f6435d9")
  @result.parsed_response
  erb :movie
end








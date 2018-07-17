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

get '/movie/:id' do
  id = params[:id]
  movie = HTTParty.get("http://omdbapi.com/?i=#{id}&apikey=2f6435d9")
  @result = movie.parsed_response
  
  erb :movie
end

get '/list' do
  title = params["s"]
  search = HTTParty.get("http://omdbapi.com/?s=#{title}&apikey=2f6435d9")
  @results = search.parsed_response['Search']
  
  erb :list
end









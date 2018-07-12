require 'pry'   
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  @num = 99
  erb :index
end


get '/:num_bottles' do 
  @num = params[:num_bottles].to_i - 1
  erb :number
end






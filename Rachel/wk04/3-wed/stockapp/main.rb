require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
#http://localhost:4567/home

get '/home' do
    "<h1>Stock Performance</h1>"
    erb(:home)
end

get '/stocksearch' do
    @price = StockQuote::Stock.quote(params[:stockcode]) #params filters the stockcode in a hash
    erb(:stocksearch)
end

get '/about' do
    erb(:about)
end

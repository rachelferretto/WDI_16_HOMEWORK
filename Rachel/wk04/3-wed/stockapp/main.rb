require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

get '/home' do
    "<h1>Stock Performance</h1>"
    erb(:home)
end

get '/stocksearch' do
    @price = StockQuote::Stock.quote(params[:stockcode]).close
    erb(:stocksearch)
end

get '/about' do
    erb(:about)
end

#https://gist.github.com/epoch/6a7ac3bce7684984d527#file-movies-md

require 'pry'    
require 'sinatra'
require "sinatra/reloader"
require 'httparty'
require 'pg'

def run_sql(sql)
  conn = PG.connect(dbname: 'moviedb')
  result = conn.exec(sql) #always returns an array
  conn.close
  return result
end


get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/movie/:id' do
  id = params[:id]
  sql = "SELECT * FROM movie_details WHERE imdb_id = '#{id}';"
  result = run_sql(sql)
  if result.count >= 1
    @movie_found = result.first
    erb :movie_db
  else
    movie = HTTParty.get("http://omdbapi.com/?i=#{id}&apikey=2f6435d9")
    @result = movie.parsed_response
    sql = "INSERT INTO movie_details (imdb_id, title, image_url, actors, year_released) VALUES ('#{@result['imdbID']}','#{@result['Title']}','#{@result['Poster']}','#{@result['Actors']}','#{@result['Year']}');"
    run_sql(sql)
    erb :movie
  end 

end

get '/list' do
  title = params["s"]
  search = HTTParty.get("http://omdbapi.com/?s=#{title}&apikey=2f6435d9")
  @results = search.parsed_response['Search']
  
  erb :list
end










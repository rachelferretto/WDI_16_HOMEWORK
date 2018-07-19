
require 'pry'
require_relative 'db_config'
require_relative 'models/planet'

binding.pry


#examples using active record (rails extension)
#Dish.find(2) - returns object with id of 2
#Dish.count - number of dishes in hash

#create/update a dish
#D1 = Dish.new - to add name Dish.name = "pizza"
#then to save to db: d1.save - and it assigns id automatically


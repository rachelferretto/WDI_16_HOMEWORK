#https://gist.github.com/epoch/5fc4fc96b27b55d7f282506c29ed2ab8

#arrays practice
#https://gist.github.com/epoch/8292180

require 'pry'

days_ofthe_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"]

#can also use daysofweek= %w |mon tues wed thurs fri|

#2. Make first day Sunday
days_ofthe_week.unshift(days_ofthe_week.pop())

#3. Create a new array of the days of the week:
#The first inner array should be the weekdays
#The second inner array should be the weekend days

new_arr = [
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    ["Saturday", "Sunday"]
    ]
#using slice method: 
#days_ofthe_week = [days_ofthe_week[0..4], days_ofthe_week[5..7]]
   


#4. Remove either the weekdays or the weekends
new_arr.pop(1)
#alternative, getting the remaining weekdays = days_ofthe_week.first


#5. Sort the remaining days alphabetically
new_arr.sort()


#LINES OF CODE
  #https://gist.github.com/epoch/19d85081335379269ab28ebf0be44dd9

#require 'fileutils' makes available additional functions

  puts('Enter filename:')
  filename = gets.chomp  #could use function ARGV to create array and call ARGV[0]

 def get_lines(filename)
    puts IO.readlines(filename).length  #or can use .size
 end

get_lines(filename)



#alternative: File.readlines('filenamehere').length 



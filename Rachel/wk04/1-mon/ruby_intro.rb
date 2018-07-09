#https://gist.github.com/epoch/5fc4fc96b27b55d7f282506c29ed2ab8

#arrays practice
#https://gist.github.com/epoch/8292180

require 'pry'

days_ofthe_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"]

#2. Make first day Sunday
days_ofthe_week.pop
days_ofthe_week.unshift("Sunday")

#3. Create a new array of the days of the week:
#The first inner array should be the weekdays
#The second inner array should be the weekend days

new_arr = [
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    ["Saturday", "Sunday"]
    ]

   


#4. Remove either the weekdays or the weekends
new_arr.pop(1)


#5. Sort the remaining days alphabetically
new_arr.sort do |a, b|
    if a == b
      0
    elsif a > b
      1
    elsif a < b
      -1
    end
  end


  #LINES OF CODE

  puts('Enter filename:')
  file = gets.chomp

 def get_lines(file)
    puts IO.readlines(file)
 end

get_lines(file)

binding.pry



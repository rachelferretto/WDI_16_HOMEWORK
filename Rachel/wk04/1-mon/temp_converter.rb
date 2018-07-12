require 'pry'

puts('enter a start temp')
temp = gets.chomp.to_i

puts('enter a unit: F, C or K')
unit = gets.chomp


def convert_temp(temp,unit)
    if unit == "F"
        puts("fahrenheit: #{temp}")
        temp = (temp - 32) / 1.8
        puts("#{unit} to celcius: #{temp}")
        temp = (temp + 459.67) / 1.8
        puts("#{unit} to kelvin: #{temp}")
      elsif unit == "C"
        puts("celcius: #{temp}")
        temp = (temp × 1.8) + 32
        puts("#{unit} to fahrenheit: #{temp}")
        temp = temp + 273.15
        puts("#{unit} to kelvin: #{temp}")
      elsif unit == "K"
        puts("kelvin: #{temp}")
        temp =  temp - 273.15
        puts("#{unit} to celcius: #{temp}")
        temp = (temp × 1.8) - 459.67 
        puts("#{unit} to fahrenheit: #{temp}")  
      else
        puts("Invalid unit")  
    end
end

puts convert_temp(temp,unit)

# loop do 
#     convert_temp(temp,unit)
#  if unit == 'q'
#     break
# end
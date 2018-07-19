#https://gist.github.com/epoch/2ac2bd21c2fd8c8ac106#file-robot-md

require 'pry'

class Robot
    attr_reader :instruction_count

    def initialize
        @name = create_name
        @instruction_count = 0
        @mac_adress = (0..9).to_a.sample(5).join("")
    end

    def create_name
        prefix = ('A'..'Z').to_a.sample(3)
        suffix = (0..9).to_a.sample(3)
        (prefix + suffix).join('')
    end

    def name
        @instruction_count +=1
        if instruction_count % 3 == 0
            reset
            puts "Resetting to factory settings."
        end
        @name
    end



    def reset
        @name = create_name
        @instruction_count += 1
    end

end

puts "Robot 1: "
robot1 = Robot.new
puts robot1.name
puts robot1.name
puts robot1.name

puts "Robot 2: "
robot2 = Robot.new
puts robot2.name
puts robot2.name
puts robot2.name

puts "Robot 3: "
robot3 = Robot.new
puts robot3.name
puts robot3.name
puts robot3.name
puts robot3.name
puts robot3.instruction_count


## r1.send(:name)
binding.pry
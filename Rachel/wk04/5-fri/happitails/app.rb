
require "pry"
require_relative "animals.rb"
require_relative "client.rb"


shelter_animals = []
shelter_clients = []

#menu
barney = shelter_animals.push(Animal.new("Barney", 5,"M", "dog"))
sandy = shelter_animals.push(Animal.new("Sandy", 7, "F", "cat"))

bart = shelter_clients.push(Client.new('Bart', 3, 40))
bob = shelter_clients.push(Client.new('Bob', 2, 30))


def add_animal(shelter_animals)
    puts "Enter name of the animal: "
    name = gets.chomp
    puts "Approx. age of #{name}: "
    age = gets.chomp
    puts "Gender:"
    gender = gets.chomp
    puts "Species: "
    species = gets.chomp
    new_animal = Animal.new(name, age, gender, species)
    loop do
        puts "Add #{name}'s favourite toy:"
        new_animal.add_toys(gets.chomp)
        puts "Add another toy? (y/n) "
        ans = gets.chomp
        if ans == "n"
          break
        end
      end
    shelter_animals << new_animal
end

def add_client(shelter_clients)
    puts "Enter name of the client: "
    name = gets.chomp
    puts "How many children does #{name} have? "
    num_children = gets.chomp
    puts "Age of #{name}:"
    age = gets.chomp
    new_client = Client.new(name, num_children, age)
    loop do 
        puts "Add a pet (y/n)?"
        ans = gets.chomp
        if ans == "y"
            puts "what is your pet's name?"
            new_client.add_pets(gets.chomp)
        elsif ans == "n"
          break
        end
      end
    shelter_clients << new_client
end


def get_animal_list(shelter_animals)
    arr = []
    shelter_animals.each do |animal|
        arr.push(animal.name)
    end
    arr
end


def get_client_list(shelter_clients)
    arr = []
    shelter_clients.each do |client|
        arr.push(client.name)
    end
    arr
end


def adopt_pet(shelter_animals, animal_name, shelter_clients, client_name) 
        shelter_animals.map { |animal|
         if  animal_name == animal.name
            p animal_name
        adopted = shelter_animals.find_index(animal)
        shelter_animals = shelter_animals.delete(shelter_animals[adopted])
        p shelter_animals
            break
         end
        } 
        shelter_clients.map { |client|
         if client_name == client.name
            id = shelter_clients.find_index(client)
            shelter_clients[id].add_pets(animal_name)
            p shelter_clients[id]
         end
         }
 end

 def surrender_pet (shelter_animals, animal_name, shelter_clients, client_name)
    shelter_clients.map { |client|
        if client_name == client.name
           id = shelter_clients.find_index(client)
           shelter_clients[id].remove_pets(animal_name)
        end
    }
    puts "Approx. age of #{animal_name}: "
    age = gets.chomp
    puts "Gender:"
    gender = gets.chomp
    puts "Species: "
    species = gets.chomp
    new_animal = Animal.new(animal_name, age, gender, species)
    loop do
        puts "Add #{animal_name}'s favourite toy:"
        new_animal.add_toys(gets.chomp)
        puts "Add another toy? (y/n) "
        ans = gets.chomp
        if ans == "n"
            break
        end
    end
    shelter_animals << new_animal
end


adopt_pet(shelter_animals, "Dusty", shelter_clients, "Bob") 



##User Menu
puts "Welcome to Happitails user portal"

loop do
    puts "MENU: What would you like to do? Enter a number"
    puts "1 - display all animals"
    puts "2 - display all clients"
    puts "3 - create an animal"
    puts "4 - create a client"
    puts "5 - adopt an animal"
    puts "6 - place an animal up for adoption"
    puts "7 - exit program"
    selected = gets.chomp
        if selected == "1"
            puts "Animals up for adoption: #{get_animal_list(shelter_animals).join(' , ')}"
        elsif selected == "2"
            puts "Our clients: #{get_client_list(shelter_clients).join(' , ')}"
            p shelter_clients
        elsif selected  == "3"
            add_animal(shelter_animals)
            p shelter_animals
        elsif selected == "4"
            add_client(shelter_clients)
            p shelter_clients
        elsif selected == "5"
            puts "what is the client's name?"
            client_name = gets.chomp
            puts "what animal does the client want to adopt:"
            animal_name = gets.chomp
            adopt_pet(shelter_animals, animal_name, shelter_clients, client_name) 
            puts "Congratulations #{client_name}, welcoming #{animal_name} to your family"
        elsif selected == "6"
            puts "What is the client's name"
            client_name = gets.chomp
            puts "What is the name of the animal to be surrendered?"
            animal_name = gets.chomp
           surrender_pet(shelter_animals, animal_name, shelter_clients, client_name)
           puts "#{animal_name} has been placed up for adoption"
        elsif selected == "7"
            puts "See you again soon!"
            exit
        end
end


binding.pry



#command line interface prgram looks after the shelter - shows a menu of options (depending on what they ask for) may be a global variable in this case - $shelter


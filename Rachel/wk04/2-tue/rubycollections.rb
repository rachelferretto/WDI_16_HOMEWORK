#Ruby Collections
#https://gist.github.com/epoch/e6e4f013cd88cd88f65c88d1dec3be08
require 'pry'
#Arrays
#Starting with the following array...

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

#Access the second value in planeteers.
planeteers[1]

#Add "Heart" to the end of planeteers.
planeteers.push('heart')


# Combine planeteers with rangers and save the result in a variable called heroes.
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers.concat(rangers)


# Alphabetize the contents of heroes using a method.
heroes.sort()



# Randomize the contents of heroes using a method. 
heroes.shuffle

# Bonus
# Select a random element from heroes using a method. The Ruby documentation might help.


# Select all elements in heroes that begin with "B" using a method. The Ruby documentation might help.



# HASHES
# Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of "Michelangelo", "Nunchuks" and true respectively.
ninja_turtle = {
    name: 'Michelangelo',
    weapon: "Nunchuks",
    radical: true
}

# Add a key age to ninja_turtle
ninja_turtle[:age] = 5


# Remove the radical key-value pair from ninja_turtle.
ninja_turtle.delete(:radical)



# Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).
ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]


# Access the first element of pizza_toppings.
ninja_turtle[:pizza_toppings][0]


# Produce an array containing all of ninja_turtle's keys using a method. The Ruby documentation might help.
ninja_turtle.keys
#=> [:name, :weapon, :age, :pizza_toppings]
class Animal
    def initialize(name, age, gender, species)
        @animalname = name
        @animalage = age
        @gender = gender
        @species = species
        @toys = []
    end

    def name()
        @animalname
    end


    def add_toys(toy)
        @toys << toy
    end

 

end


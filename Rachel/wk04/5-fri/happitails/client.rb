class Client
    def initialize(name, num_children, age)
        @clientname = name
        @num_children = num_children
        @clientage = age
        @pets = []

    end

    def name()
        @clientname
    end


    def add_pets(petname)
        @pets << petname
    end

    def remove_pets(petname)
        @pets.delete(petname)
    end

end

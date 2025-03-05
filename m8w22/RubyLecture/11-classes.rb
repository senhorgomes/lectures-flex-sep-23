# class Rectangle {

# }

class NewPet

    # getter and a setter

    # Name or the age, are write only, read only or both

    # attr_reader :name, :age
    # attr_writer :name, :age
    attr_accessor :name, :age

    def initialize(name, age)
        @name = name
        @age = age
    end


    # private
    def say_hello
        puts "Hello my name is #{name}"
    end

end

new_pet = NewPet.new("Air bud", "7")

new_pet.say_hello


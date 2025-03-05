# In JS we had: == / ===
# ==
puts (true == true)
puts ("true" == true)

puts (3 == 3) # Comparing two integers together
puts (3 == 3.00) # Comparing an integer with a float => Both are still numbers at the end of day
puts ("3" == 3) #false

# if else




=begin
const userNum = 10

if(userNum > 10){
    console.log("This number is greater than ten")
} else if (userNum < 10) {
    console.log("This number is lesser than 10")    
} else {
    console.log("....pretty sure this number is 10")
}

=end
user_num = 10

if user_num > 10
    puts "This number is greater than ten"
elsif user_num < 10
    puts "This number is lesser than 10"
else
    puts "....pretty sure this number is 10"
end

# switch statements

case user_num
    when user_num > 10
        puts "This number is greater than ten"
    when user_num < 10
        puts "This number is lesser than 10"
    else
        puts "....pretty sure this number is 10"
end

# Shorthand 
# &&

snowing = false

puts "It is not snowing!" if snowing == false

puts "It is snowing" unless snowing == false
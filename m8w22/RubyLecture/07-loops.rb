=begin
    In JavaScript we had a few loops to pick from:
    * for
    * for...in
    * for...of
    * Array.forEach
    * while
=end

# Array

numbers = [1,2,3,4,5]

puts "Numbers are being printed!"

for number in numbers do

    # puts number

end

# While loop

i = 0

while i <= 10 do
    puts "Counter is at #{counter}"
    counter += 1
end

# Break loop

loop do
    counter += 1
    # puts counter
    break if counter > 5
end

# for...each

numbers.each do |number|
    # Skip odd numbers
    if number % 2 != 0
        next
    end
    puts number * 2
end

# next


# each_with_index

numbers.each_with_index do |number, index|
    puts number * index
end

new_array = numbers.map do |number|
    number * 2
end

new_array = numbers.map { |number| number * 2 }

p new_array

# We dont need return

(50..100).each do |number|
    puts number
end

# Exclude the last number

(50...100).each do |number|
    puts number
end

1000.times 
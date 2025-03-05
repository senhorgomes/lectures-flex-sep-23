=begin

callbacks => blocks
Arrow functions => lambdas

=end
# One time execution
# Higher order function
def block_friend_method
    puts "Running first line"
    yield
    puts "Running last line"
end

block_friend_method do
    puts "This is my callback"
end

# Lambda
# Reusable functions
times_two_method = lambda { |x| x * 2 }

puts times_two_method.call(5)


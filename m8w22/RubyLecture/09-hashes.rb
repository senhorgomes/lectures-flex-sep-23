# Objects = Hashes


=begin
    JS key-value pairs:
    keys can be symbols or strings
    {
        key: "value"
    }
=end

# student = {
#     "first_name" => "Bryan",
#     "last_name" => "Gomes"
# }
# student = {
#     :first_name => "Bryan",
#     :last_name => "Gomes"
# }
student = {
    first_name: "Bryan",
    last_name: "Gomes"
}

# puts student["first_name"]
puts student[:first_name]

my_key = "last_name"
# convert the string into a symbol
puts student[my_key.to_sym]


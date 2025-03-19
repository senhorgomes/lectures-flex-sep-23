# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


puts "Seeding data..."

puts "Creating Authors"

10.times do 
    Author.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
    )
end

puts "Authors created!"
puts "Creating books..."

# Get all authors to associate with books
authors = Author.all

# Create 20 books
20.times do
    Book.create!(
        title: Faker::Book.title,
        page_count: Faker::Number.between(from: 100, to: 1000),
        print_date: Faker::Date.between(from: 20.years.ago, to: Date.today),
        publisher: Faker::Company.name,
        genre: Faker::Book.genre,
        author: authors.sample
    )
end

puts "Books created!"



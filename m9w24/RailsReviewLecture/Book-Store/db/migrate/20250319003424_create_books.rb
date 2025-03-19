class CreateBooks < ActiveRecord::Migration[7.2]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :page_count
      t.date :print_date
      t.string :publisher
      t.string :genre
      t.references :author, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :avatar
      t.text :bio
      t.string :address
      t.string :website
      t.string :twitter

      t.timestamps null: false
    end
  end
end

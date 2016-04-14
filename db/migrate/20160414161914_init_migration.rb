class InitMigration < ActiveRecord::Migration
  def change
    create_table 'urls', force: :cascade do |t|
      t.string :url, null: false
      t.timestamps null: false
    end
  end
end

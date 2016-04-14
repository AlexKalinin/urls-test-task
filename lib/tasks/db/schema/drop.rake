namespace :db do
  namespace :schema do
    drop_fname = "#{Rails.root}/db/schema.rb"
    desc "DROP schema's file: #{drop_fname}"
    task drop: :environment do
      File.unlink drop_fname if File.exist? drop_fname
    end
  end
end
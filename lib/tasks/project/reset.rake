namespace :project do
  desc 'RESET project data to initial: will reset database and all project data files, like attachments and images'
  task reset: :environment do
    if Rails.env == 'development'
      puts "Call 'rake project:delete_attachments'"
      Rake::Task['project:delete_attachments'].invoke

      puts "Call 'rake db:schema:drop'"
      Rake::Task['db:schema:drop'].invoke

      puts "Call 'rake db:drop'"
      Rake::Task['db:drop'].invoke

      puts "Call 'rake log:clear'"
      Rake::Task['log:clear'].invoke
    end



    puts "Call 'rake assets:clean'"
    Rake::Task['assets:clean'].invoke

    puts "Call 'rake tmp:clear'"
    Rake::Task['tmp:clear'].invoke

    puts "Call 'rake db:create'"
    Rake::Task['db:create'].invoke

    puts "Call 'rake db:migrate'"
    Rake::Task['db:migrate'].invoke

    puts "Call 'rake assets:precompile'"
    Rake::Task['assets:precompile'].invoke
  end
end
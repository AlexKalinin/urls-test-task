namespace :project do
  ATTACHMENTS = "#{Rails.root}/public/system/"

  desc "Delete folder with images and attachments: #{ATTACHMENTS}"
  task delete_attachments: :environment do
    print 'project:delete_pictures: Deleting attachments... '
    FileUtils.rm_rf(ATTACHMENTS)
    print 'done.'
    STDOUT.flush
    puts
  end

end


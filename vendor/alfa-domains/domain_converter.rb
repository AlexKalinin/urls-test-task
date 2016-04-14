class DomainConverter
  def self.do
    folder = "#{Rails.root}/vendor/alfa-domains"
    f_domains = File.open("#{folder}/alfa-domains.txt", 'r')
    f_js = File.open("#{folder}/alfa-domains.js", 'w')
    f_js.write 'var AlfaDomains = ['
    while(line = f_domains.gets)
      f_js.write "'#{line.strip.downcase}', "
    end
    f_js.write '];'

    f_domains.close
    f_js.close


  end
end
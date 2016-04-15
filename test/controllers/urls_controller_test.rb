require 'test_helper'

class UrlsControllerTest < ActionController::TestCase
  test 'should check regex' do
    @controller = UrlsController.new
    assert(@controller.instance_eval{ black_listed?('www.blocked.com')}, 'Testing "blocked" keyword')
    assert(@controller.instance_eval{ black_listed?('blocked1.com')}, 'Testing "blocked" keyword')
    assert(@controller.instance_eval{ black_listed?('mobile.noway.com')}, 'Testing "noway" keyword')
    assert_not(@controller.instance_eval{ black_listed?('example.com')}, 'Testing any whitelisted keyword')
  end

end

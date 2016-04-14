class UrlsController < ApplicationController
  protect_from_forgery except: [:index, :create]
  before_action :set_default_restponce_status
  rescue_from Exception, with: :error_handler_method


  # get JSON request
  def index
    @urls = Url.all.map {|u| u.url}
  end

  # post JSON request
  def create
    if params[:urls]
      params[:urls].each do |u|
        url = Url.find_by(url: u)
        Url.create(url: u) unless url
      end
    end
  end


  private
    def set_default_restponce_status
      @rsp_status = true
      @rsp_message = 'ok'
    end

    def error_handler_method(e)
      #$applog.warn "Got exeption #{e.class}: #{e.message.to_s}, backtrace: #{e.backtrace.first}"
      #todo: fix this
      @rsp_status = false
      @rsp_message = e.message.to_s
      render partial: 'error'
    end
end

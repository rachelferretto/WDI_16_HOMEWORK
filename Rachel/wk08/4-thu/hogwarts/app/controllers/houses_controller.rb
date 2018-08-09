class HousesController < ApplicationController

  def index
    @houses = House.all
    render :index
  end

  def show
    @houses = House.all
  end

end

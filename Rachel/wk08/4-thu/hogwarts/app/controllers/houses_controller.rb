class HousesController < ApplicationController

  def index
    @houses = House.all
    render :index
  end

  def show
    @house = House.all
  end

end

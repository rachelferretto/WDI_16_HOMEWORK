class PlanetsController < ApplicationController
    def index
        @planets = Planet.all
        @planet = Planet.new
        render :index
    end

    def new
        @planet = Planet.new
    end

    def create
        @planet = Planet.new(name: params[:name], url: params[:url])
        if @planet.save
            redirect_to '/planets'
        else
            render :new
        end
    end

    def show
        @planet = Planet.find( params[:id])
    end


    def destroy
    end

    def edit
        @planet = Planet.find( params[:id])
    end

    def update
    end


end

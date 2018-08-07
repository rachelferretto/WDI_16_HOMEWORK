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
        @planet = Planet.find (params[:id])
        if @planet.destroy
            redirect_to '/planets'
        else 
            render :show
        end
    end

    def edit
        @planet = Planet.find( params[:id])
        render :edit
    end

    def update
        @planet = Planet.find( params[:id])
        @planet.name = params[:name]
        @planet.url = params[:url]
        if @planet.save
            redirect_to "/planets/#{@planet.id}"
        else
            render :edit
        end
    end


end

class PicsController < ApplicationController


    def index
        @pics = Pic.all.order("created_at DESC")
    end

    def new
        @pic = Pic.new
    end

    def create
        @pic = Pic.new(pic_params)
        if @pic.save
            redirect_to @pic, notice: "yes it was posted!"
        else
            render 'new'
        end
    end

    def edit

    end

    def update
        if @pic.update(pic_params)
            redirect_to @pic, notice: "Congrats pic was updated!"
        else
            render 
        end

    def destroy
        @pic.destroy 
        redirect_to root_path
        
    end

    private

    def pic_params
        params.require(:pic).permit(:title, :description)
    end

    def find_pic
        @pic = Pic.find(params[:id])
    end
end

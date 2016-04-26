class ItemsController < ApplicationController

  # GET /items
  # GET /items.json
  def index
    if not params[:searchString].blank?
      @items = Item.where('name like ?', "%#{params[:searchString]}%")
    else
      @items = Item.all
    end
  end

  # POST /items
  # POST /items.json
  def create
    @item = Item.new(item_params)
    respond_to do |format|
      if @item.save
        format.json { render :show, status: :created, location: @item }
      else
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items/1
  # PATCH/PUT /items/1.json
  def update
    @item = Item.find(params[:id])
    respond_to do |format|
      if @item.update(item_params)
        format.json { render :show, status: :ok, location: @item }
      else
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy
    @item = Item.find(params[:id])
    respond_to do |format|
      if @item.destroy
        format.json { render json: {:id => @item.id}, status: :ok }
      else
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def item_params
      params.require(:item).permit(:id, :name, :description, :tags)
    end
end

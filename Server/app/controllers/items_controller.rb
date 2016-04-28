class ItemsController < ApplicationController

  # GET /items
  # GET /items.json
  def index
    filter = params[:searchString] || ''
    filter = filter.tr('^A-Za-z0-9', '')
    unless filter.blank?
      @items = Item.where('name like ?', "%#{filter}%").order(:name)
    end
  end

  # GET /items/1
  # GET /items/1.json
  def show
    respond_to do |format|
      if Item.exists?(id: params[:id])
        @item = Item.find(params[:id])
        format.json { render :show, status: :ok, location: @item }
      else
        format.json { render plain: "Couldn't get item with id = #{params[:id]}", status: :bad_request }
      end
    end
  end

  # POST /items
  # POST /items.json
  def create
    @item = Item.new(item_params)
    unless params[:tags].blank?
      @item.tags = Tag.find params[:tags]
    end
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
    unless params[:tags].blank?
      @item.tags = Tag.find params[:tags]
    end
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

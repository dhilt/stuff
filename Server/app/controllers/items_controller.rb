class ItemsController < ApplicationController

  before_filter :authenticate

  # GET /items
  # GET /items.json
  def index
    respond_to do |format|
		filter = params[:searchString] || ''
		filter = filter.tr('^A-Za-zА-Яа-я0-9', '')
		limit = Integer(params[:limit], 10) || 99999
		offset = Integer(params[:offset], 10)  || 0
		unless filter.blank?

		  @items = Item.where('lower(name) like ?', "%#{filter.mb_chars.downcase.to_s}%")
		  countTotal = @items.count
		  countBefore = 0
		  countAfter = 0

		  if countTotal > 0
			  @items = @items.select("id, name").order(:name)

			  if offset > 0
				@items = @items.offset(offset)
				countBefore = countTotal - @items.count
			  end

			  @items = @items.limit(limit)
			  countAfter = countTotal - @items.count - countBefore
		  end

		  format.json { render json: { items: @items, before: countBefore, after: countAfter }, status: :ok }
		end
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
    lastId = Item.maximum('id')
    @item.id = lastId === nil ? 1 : lastId + 1
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

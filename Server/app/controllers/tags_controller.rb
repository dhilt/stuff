class TagsController < ApplicationController

  # GET /tags
  # GET /tags.json
  def index
    filter = params[:searchString] || ''
    filter = filter.tr('^A-Za-zА-Яа-я0-9', '')
    if not filter.blank?
      @tags = Tag.where('name like ?', "%#{filter}%").order(:name)
    else
      @tags = Tag.all
    end
  end

  # POST /tags
  # POST /tags.json
  def create
    @tag = Tag.new(tag_params)
    respond_to do |format|
      if @tag.save
        format.json { render :show, status: :created, location: @tag }
      else
        format.json { render json: @tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tags/1
  # PATCH/PUT /tags/1.json
  def update
    @tag = Tag.find(params[:id])
    respond_to do |format|
      if @tag.update(tag_params)
        format.json { render :show, status: :ok, location: @tag }
      else
        format.json { render json: @tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tags/1
  # DELETE /tags/1.json
  def destroy
    @tag = Tag.find(params[:id])
    respond_to do |format|
      if @tag.destroy
        format.json { render json: {:id => @tag.id}, status: :ok }
      else
        format.json { render json: @tag.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def tag_params
      params.require(:tag).permit(:id, :name, :description)
    end
end

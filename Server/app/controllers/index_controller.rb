class IndexController < ApplicationController

  # POST /items
  # POST /items.json
  def items
    unless params[:tags].blank?
      @items = Item.joins(:tags).where(tags: { id: params[:tags] }).order(:name)
    end
  end

end

#SELECT "items".* FROM "items"
#INNER JOIN "items_tags" ON "items_tags"."item_id" = "items"."id"
#INNER JOIN "tags" ON "tags"."id" = "items_tags"."tag_id"
#WHERE "tags"."id" IN (7, 8)
#ORDER BY "items"."name" ASC

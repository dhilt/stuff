class IndexController < ApplicationController

  before_filter :authenticate

  # POST /items
  # POST /items.json
  def items
    unless params[:tags].blank?
      if params[:type] === 'intersect'
        @items = Item.joins(:tags).where(tags: {id: params[:tags]}).group('items.id').having("count(tags.id) = #{ params[:tags].count }").order(:name)
      else # 'union'
        @items = Item.joins(:tags).where(tags: {id: params[:tags]}).order(:name)
      end
    end
  end

end

# --- union ---
#SELECT "items".* FROM "items"
#INNER JOIN "items_tags" ON "items_tags"."item_id" = "items"."id"
#INNER JOIN "tags" ON "tags"."id" = "items_tags"."tag_id"
#WHERE "tags"."id" IN (7, 8)
#ORDER BY "items"."name" ASC

# --- intersect ---
#SELECT "items".* FROM "items"
#INNER JOIN "items_tags" ON "items_tags"."item_id" = "items"."id"
#INNER JOIN "tags" ON "tags"."id" = "items_tags"."tag_id"
#WHERE "tags"."id" IN (10, 20) GROUP BY items.id HAVING count(tags.id) = 2
#ORDER BY "items"."name" ASC


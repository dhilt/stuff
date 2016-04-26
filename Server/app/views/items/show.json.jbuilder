json.extract! @item, :id, :name, :description, :created_at, :updated_at
json.tags @item.tags.pluck(:id)
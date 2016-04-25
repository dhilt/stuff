json.array!(@items) do |item|
  json.extract! item, :id, :name, :description
  json.tags item.tags.pluck(:id)
end

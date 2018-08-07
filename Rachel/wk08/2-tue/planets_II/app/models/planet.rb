class Planet < ApplicationRecord
    validates :url, presence: true, length: { in: 3 ..3000}, allow_blank: false
    validates :name, presence: true
end
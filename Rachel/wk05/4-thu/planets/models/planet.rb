class Planet < ActiveRecord::Base
    has_many :comments 
end

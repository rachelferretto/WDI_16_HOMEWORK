class Planet < ActiveRecord::Base
    has_many :comments 
    has_many :details
end

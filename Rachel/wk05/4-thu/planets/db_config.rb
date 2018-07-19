require 'active_record'

options = {
    adapter: 'postgresql',
    database: 'planets_db'
}

ActiveRecord::Base.establish_connection(options)
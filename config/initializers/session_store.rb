DOMAIN = Rails.env === 'production' ? 'stay-on-track-app.herokuapp.com' : 'localhost'

Rails.application.config.session_store :cookie_store, expire_after: 14.days, key: '_stayontrack_session', path: '/', domain: DOMAIN, httponly: :true, same_site: :strict, secure: :true


# if Rails.env === 'production' 
#   Rails.application.config.session_store :cookie_store, expire_after: EXPIRATION_INTERVAL, key: SESSION_NAME, path: '/', domain: 'stay-on-track-app.herokuapp.com', httponly: :true, same_site: :strict, secure: :true
# else
#   Rails.application.config.session_store :cookie_store, expire_after: EXPIRATION_INTERVAL, key: SESSION_NAME, path: '/', httponly: :true, same_site: :strict, secure: :true
# end 
if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, expire_after: 14.days, key: '_stay_on_track', path: '/', domain: 'stay-on-track-app.herokuapp.com', httponly: :true, same_site: :strict, secure: :true
else
  Rails.application.config.session_store :cookie_store, expire_after: 14.days, key: '_stay_on_track', path: '/', httponly: :true, same_site: :strict, secure: :true
end
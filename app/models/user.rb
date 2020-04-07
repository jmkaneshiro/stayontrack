# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  firstname       :string           not null
#  lastname        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :firstname, :lastname, :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.findBy(email: email)
    return nil unless user && user.is_password?(password)
  end

  def is_password?(password)
    bcrypt_password = BCrypt::Password.new(self.password_digest)
    bcrypt_password.is_password?(password)
  end
  
  def password=(password)
    @password = password
    self.password_digest ||= BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private
  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end
end

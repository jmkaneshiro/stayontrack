# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  username        :string           not null
#  name            :string           not null
#  initials        :string           not null
#
class User < ApplicationRecord
  validates :email, :session_token, :username, presence: true, uniqueness: true
  validates :password_digest, :name, :initials, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  attr_reader :password

  after_initialize :ensure_session_token

  has_many :projects_owned,
    foreign_key: :project_owner_id,
    class_name: :Project

  has_many :project_memberships,
    foreign_key: :member_id,
    class_name: :ProjectMembership

  has_many :stories_owned,
    foreign_key: :story_owner_id,
    class_name: :Story

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    
    if user && user.is_password?(password)
      return user
    else 
      return nil
    end
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

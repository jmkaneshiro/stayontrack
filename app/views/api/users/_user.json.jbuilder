json.extract! user, :id, :email, :username, :name, :initials
json.projects_owned user.projects_owned.pluck(:id)
json.project_memberships user.project_memberships.pluck(:project_id)
json.extract! project, :id, :title, :project_owner_id
json.project_members project.members.pluck(:id)
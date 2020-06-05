@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project
    json.project_members project.members.pluck(:id)
  end
end
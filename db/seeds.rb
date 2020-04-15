# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user_1 = User.create({ email: "demo_user@mailinator.com", password: "password", username: "demo_user", name: "demo_user", initials: "DE" })
demo_project_1 = Project.create({ title: "My First Project", project_owner_id: 1 })
demo_project_membership_1 = ProjectMembership.create({ member_id: 1, project_id: 1 })

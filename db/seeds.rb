# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user_1 = User.create({ email: "demo_user@mailinator.com", password: "password", username: "demo_user", name: "demo_user", initials: "DE" })
jared = User.create({ email: "jared@mailinator.com", password: "password", username: "ja", name: "jared", initials: "JA" })
demo_project_1 = Project.create({ title: "Demo's App", project_owner_id: 1 })
demo_project_2 = Project.create({ title: "Jared's App", project_owner_id: 2 })
demo_project_1_membership_1 = ProjectMembership.create({ member_id: 1, project_id: 1 })
demo_project_1_membership_2 = ProjectMembership.create({ member_id: 2, project_id: 1 })
demo_project_2_membership_1 = ProjectMembership.create({ member_id: 2, project_id: 2 })
demo_project_1_feature_1 = Story.create({name: "signup feature", story_type: "feature", story_owner_id: 1, project_id: 1, story_state: "unassigned"})
demo_project_1_bug_1 = Story.create({name: "login bug", story_type: "bug", story_owner_id: 1, project_id: 1, story_state: "unassigned"})
demo_project_1_chore_1 = Story.create({name: "backend chore for Jared", story_type: "chore", story_owner_id: 2, project_id: 1, story_state: "unassigned"})
import React from "react";
import { withRouter } from "react-router-dom";

class MembershipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      available_users: this.props.availableUsers,
      member_id: this.props.availableUsers.length > 0 ? this.props.availableUsers[0].id : null,
      project_id: this.props.project.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const projectMembership = Object.assign({}, this.state);
    this.props.createProjectMembership(projectMembership).then(() => this.props.closeModal());
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    const { currentMembers, availableUsers, closeModal } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="modal-form">
          <h1>Membership Settings</h1>
          <label className="form-input-label">
            <span>Current members</span>
            <ul>
              {currentMembers.map(
                member =>
                  <li key={"current_member_" + member.id}>{member.username}</li>
              )}
            </ul>
            <br/>
            {availableUsers.length > 0 &&
              <>
                <label htmlFor="add-members">Add a new member from the dropdown</label>
                <select
                  name="add-members"
                  id="add-members"
                  value={this.state.member_id}
                  onChange={this.update("member_id")}
                >
                  {availableUsers.map(
                    user =>
                      <option
                        key={"available_user_" + user.id}
                        value={user.id}
                      >
                        {user.username}
                      </option>
                  )}
                </select>
              </>
            }
          </label>
          <div className="modal-form-actions">
            <button
              className="dashboard-action-tabs-btn btn btn-white"
              onClick={() => closeModal()}
            >
              Close
            </button>
            {availableUsers.length > 0 &&
              <input
                type="submit"
                className="dashboard-action-tabs-btn btn btn-green"
                value="Add Member"
              />
            }
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(MembershipForm);
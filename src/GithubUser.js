import React, {Component} from 'react'

class GithubUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
        }
        this.fetchUserData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if(locationChanged){
            this.fetchUserData(nextProps)
        }
    }

    fetchUserData = (props) => {
        fetch(`https://api.github.com/users/${props.match.params.username}`)
        .then(response => response.json())
        .then(user => this.setState( { user }))
        .catch((() => console.log('mistake happened')))
    }

    render() {
        const { user } = this.state
        return (
            <div className="GithubUser">
                <img src={user.avatar_url} alt=""/>
                <h2>{user.login}</h2>
                <h3>Followers: {user.followers}</h3>
                <h3>Following: {user.following}</h3>
                <a href={user.html_url} target="_blank">{user.login}'s Profile</a>
            </div>

        )
    }
}

export default GithubUser
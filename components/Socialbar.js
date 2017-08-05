import { Grid, Icon, Button, Container } from 'semantic-ui-react'
import React, { Component } from 'react'

export default class Socialbar extends Component {
    componentWillMount() {
        this.setState({
            links: [
                {
                    name: 'github',
                    link: 'https://github.com/plumsauc3'
                },
                {
                    name: 'linkedin',
                    link: 'https://www.linkedin.com/in/derek-xu-06814177/'
                },
                {
                    name: 'mail',
                    link: 'mailto:xuderekq@hotmail.com'
                },
                {
                    name: 'facebook',
                    link: 'https://www.facebook.com/xuderekq'
                },
                {
                    name: 'youtube',
                    link: 'https://www.youtube.com/derekxumusic'
                },
                {
                    name: 'instagram',
                    link: 'https://www.instagram.com/derekxu_'
                }
            ]
        })
    }
    render() {
        return (
        //Necessary right now in Semantic to make 2 separate cases for mobile/computer
            <Grid>
                <Grid.Row centered only='mobile' columns={this.state.links.length}>
                    {this.state.links.map((item, i) => {
                        return (
                            <Grid.Column textAlign='center'>
                                <Button as='a' icon href={item.link} circular color='black'>
                                    <Icon name={item.name} size='large' color='white' />
                                </Button>
                            </Grid.Column>
                        )
                    })}
                </Grid.Row>
                <Grid.Row centered only='computer tablet' columns={this.state.links.length + 4}>
                    {this.state.links.map((item, i) => {
                        return (
                            <Grid.Column textAlign='center'>
                                <Button as='a' icon href={item.link} circular color='black'>
                                    <Icon name={item.name} size='large' color='white' />
                                </Button>
                            </Grid.Column>
                        )
                    })}
                </Grid.Row>
            </Grid>
        )
    }
}
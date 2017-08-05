import { Grid, Icon, Button } from 'semantic-ui-react'
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
            <Grid>
                <Grid.Row centered columns={this.state.links.length}>
                    {this.state.links.map((item, i) => {
                        return (
                            <Grid.Column textAlign='center' tablet={1} computer={1} mobile={2}>
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
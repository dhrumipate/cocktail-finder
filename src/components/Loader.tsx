import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderWithText = () => (
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderWithText
import {  Breadcrumb } from 'semantic-ui-react';

const BreadcrumbData = () => (
    <Breadcrumb className='mini'>
      <Breadcrumb.Section link>Home</Breadcrumb.Section>
      <Breadcrumb.Divider />
      <Breadcrumb.Section active>Cocktail List</Breadcrumb.Section>
    </Breadcrumb>
  )

  export default BreadcrumbData

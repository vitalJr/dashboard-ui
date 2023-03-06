import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageUpload, { ImageUploadProps } from './ImageUpload';

export default {
  title: 'Components/ImageUpload',
  component: ImageUpload,
} as ComponentMeta<typeof ImageUpload>;

const Template: ComponentStory<typeof ImageUpload> = (
  args: ImageUploadProps
) => <ImageUpload {...args} />;

export const Default = Template.bind({});
Default.args = {};
